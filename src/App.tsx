import { useState, useEffect, useRef, useCallback } from "react";
import "./App.scss";
import Plyr from "plyr";
import { playlists, Playlist, Video } from "./playlists";
import clsx from "clsx";
import { motion } from "framer-motion";

const useYouTubeSource = false;

const storeNewPlayedPlaylist = (playlist: Playlist) => {
  let playedPlaylists = JSON.parse(
    localStorage.getItem("playedPlaylists") || "[]"
  );
  if (playedPlaylists.includes(`${playlist.title} by ${playlist.dj}`)) {
    return;
  }
  playedPlaylists.push(`${playlist.title} by ${playlist.dj}`);
  localStorage.setItem("playedPlaylists", JSON.stringify(playedPlaylists));
};

const pickRandomPlaylist = (): Playlist => {
  let playedPlaylists = JSON.parse(
    localStorage.getItem("playedPlaylists") || "[]"
  );
  let availablePlaylists = playlists.filter(
    (p) => playedPlaylists.includes(`${p.title}by${p.dj}`) === false
  );
  if (availablePlaylists.length === 0) {
    availablePlaylists = playlists;
  }
  const playlist =
    availablePlaylists[Math.floor(Math.random() * availablePlaylists.length)];
  storeNewPlayedPlaylist(playlist);
  return playlist;
};

const changePlayerSource = (player: Plyr, video: Video) => {
  if (useYouTubeSource) {
    player.source = {
      type: "video",
      sources: [
        {
          src: video.id,
          provider: "youtube",
        },
      ],
    };
  } else {
    player.source = {
      type: "video",
      title: "STAY VIBRANT",
      sources: [
        {
          src: `https://static-jp.qier222.com/stay-vibrant/${video.filename}`,
          size: 1080,
        },
      ],
    };
  }
};

function App() {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [player, setPlayer] = useState<Plyr>();
  const [playlist, setPlaylist] = useState<Playlist>(() => {
    const initial = pickRandomPlaylist();
    return initial;
  });
  const [video, setVideo] = useState<Video>(playlist.videos[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showBigTitle, setShowBigTitle] = useState<boolean>(
    document.body.clientWidth > 768 ? true : false
  );
  const [hover, setHover] =
    useState<"none" | "bigPlay" | "bigTitle" | "title">("none");

  const changePlaylist = useCallback(
    (playlist: Playlist, source: "pickRandomPlaylist" | "" = "") => {
      setPlaylist(playlist);
      setVideo(playlist.videos[0]);
      setShowMenu(false);
      if (source !== "pickRandomPlaylist") {
        storeNewPlayedPlaylist(playlist);
      }
    },
    []
  );

  const nextVideoOrPlaylist = useCallback(() => {
    if (playlist.videos.length === 1) {
      changePlaylist(pickRandomPlaylist(), "pickRandomPlaylist");
    } else {
      const currentVideoIndex = playlist.videos.findIndex(
        (v) => v.id === video.id
      );
      if (currentVideoIndex + 1 === playlist.videos.length) {
        changePlaylist(pickRandomPlaylist(), "pickRandomPlaylist");
        return;
      }
      setVideo(playlist.videos[currentVideoIndex + 1]);
    }
  }, [changePlaylist, playlist, video]);

  useEffect(() => {
    if (!playerRef.current) return;
    setPlayer(
      new Plyr(playerRef.current, {
        controls: [],
        youtube: {
          start: 1,
        },
      })
    );
  }, []);

  useEffect(() => {
    if (!player) return;
    changePlayerSource(player, video);
    if (isStarted) {
      const ready = () => player.play();
      player.once("ready", ready);
    }
  }, [player, video, playlist, isStarted]);

  useEffect(() => {
    if (!player) return;
    const pause = () => setIsPlaying(false);
    const play = () => setIsPlaying(true);
    const ended = () => nextVideoOrPlaylist();
    player.on("pause", pause);
    player.on("play", play);
    player.on("ended", ended);
    return () => {
      player.off("pause", pause);
      player.off("play", play);
      player.off("ended", ended);
    };
  }, [player, nextVideoOrPlaylist]);

  const isShowGreyLayer =
    video.showGreyLayer !== undefined
      ? video.showGreyLayer
      : playlist.showGreyLayer !== undefined
      ? playlist.showGreyLayer
      : true;
  const specialBigTitle =
    video.specialBigTitle !== undefined
      ? video.specialBigTitle
      : playlist.specialBigTitle !== undefined
      ? playlist.specialBigTitle
      : "STAY VIBRANT";

  return (
    <div className="App">
      <div className="video-wrapper">
        <video ref={playerRef}></video>
      </div>

      <div
        className={clsx("grey-layer", !isShowGreyLayer && "display-none")}
      ></div>

      <div
        className={clsx(
          "big-play-button glitch-animation",
          isStarted && "display-none"
        )}
      >
        <motion.span
          onClick={() => {
            player?.play();
            setIsStarted(true);
            setIsPlaying(true);
          }}
          data-name="PLAY"
          className={clsx(hover === "bigPlay" && "glitch-container")}
          onMouseEnter={() => {
            setHover("bigPlay");
          }}
          onMouseLeave={() => {
            setHover("none");
          }}
          initial={{ scale: 10 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.25 }}
          exit={{ opacity: 0 }}
        >
          <span>PLAY</span>
        </motion.span>
      </div>

      <div
        className={clsx(
          "big-title  glitch-animation",
          (!isStarted || !showBigTitle) && "display-none"
        )}
        onClick={() => setShowMenu(false)}
      >
        <span
          onClick={() => setShowBigTitle(false)}
          data-name={specialBigTitle}
          className={clsx(hover === "bigTitle" && "glitch-container")}
          onMouseEnter={() => {
            setHover("bigTitle");
          }}
          onMouseLeave={() => {
            setHover("none");
          }}
        >
          <span>{specialBigTitle}</span>
        </span>
      </div>

      <div
        className={clsx("info", (!isStarted || showBigTitle) && "display-none")}
        onClick={() => setShowMenu(false)}
      >
        <div className="top">
          <div
            className="website-title  glitch-animation"
            onClick={() => setShowBigTitle(true)}
            onMouseEnter={() => {
              setHover("title");
            }}
            onMouseLeave={() => {
              setHover("none");
            }}
          >
            <span
              data-name={specialBigTitle}
              className={clsx(hover === "title" && "glitch-container")}
            >
              {specialBigTitle}
            </span>
          </div>
          <div className="playlist-details">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              className="title"
            >
              {playlist.title}
            </a>
            <div className="dj">{playlist.dj}</div>
          </div>
          <a className="credit" href="https://github.com/qier222/stay-vibrant">
            COLLECTED BY QIER222
          </a>
        </div>
        <div className="bottom">
          <div className="playlist-details">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              className="title"
            >
              {playlist.title}
            </a>
            <div className="dj">{playlist.dj}</div>
          </div>
          <div className="controls">
            <div
              className="pause"
              onClick={() => {
                player?.togglePlay();
                setIsPlaying(!isPlaying);
              }}
            >
              {isPlaying ? "PAUSE" : "PLAY"}
            </div>
            <div
              className="menu"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(true);
              }}
            >
              MENU
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("menu-panel", showMenu && "show")}>
        <div className="playlists">
          {playlists.map((p) => (
            <div
              className="playlist"
              onClick={() => changePlaylist(p)}
              key={`${p.title}by${p.dj}`}
            >
              <div className="title">
                {playlist.title === p.title && playlist.dj === p.dj && "🔊 "}
                {p.title}
              </div>
              <div className="dj">{p.dj}</div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <div
            className="next"
            onClick={() =>
              changePlaylist(pickRandomPlaylist(), "pickRandomPlaylist")
            }
          >
            <span>NEXT</span>
          </div>
          <div className="close" onClick={() => setShowMenu(false)}>
            <span>CLOSE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
