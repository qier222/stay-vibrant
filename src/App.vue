<template>
  <div id="app">
    <video ref="videoPlayer" class="plyr"></video>
    <div class="grey" v-show="true"></div>
    <div class="stay-vibrant" v-show="!showInfo && clickPlay">
      <span @click="doShowInfo">STAY VIBRANT</span>
    </div>
    <div class="info" v-show="showInfo">
      <div class="top">
        <div class="title">STAY VIBRANT</div>
        <div class="menu">
          <div class="link" @click="toQier222">COLLECTED BY QIER222</div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <div class="title link" @click="toYouTube">
            {{ playlist.title }}
          </div>
          <div class="subtitle">
            {{ playlist.subtitle }}
          </div>
        </div>
        <div class="controls">
          <div class="play" @click="playOrPause">
            {{ playButtonText }}
          </div>
          <div class="next" @click="nextPlaylist">
            NEXT
          </div>
        </div>
      </div>
    </div>
    <div class="play-button-layout" v-if="showStartButton">
      <div
        :class="{ 'play-animation': clickPlay }"
        class="play-button"
        @click="startPlay"
      >
        PLAY
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/plyr.css";
import Plyr from "plyr";
import playlists from "./playlists";

export default {
  name: "App",
  data() {
    return {
      player: null,
      showInfo: false,
      playlist: null,
      playingVideoID: null,
      timer: null,
      clickPlay: false,
      showStartButton: true,
      playButtonText: "LOADING",
    };
  },
  created() {
    let playedPlaylists = JSON.parse(localStorage.getItem("playedPlaylists"));
    if (playedPlaylists === null) {
      playedPlaylists = [];
      localStorage.setItem("playedPlaylists", JSON.stringify([]));
    }
    this.playlist = this.pickAUnplayedPlaylist();
    if (playedPlaylists.includes(this.playlist.title) === false) {
      playedPlaylists.push(this.playlist.title);
      localStorage.setItem("playedPlaylists", JSON.stringify(playedPlaylists));
    }
  },
  mounted() {
    this.player = new Plyr(this.$refs.videoPlayer, {
      controls: [],
      // autoplay: true,
      youtube: {},
    });
    this.nextVideo();
    this.player.on("ended", () => {
      this.nextVideo();
    });
    this.player.on("pause", () => {
      this.playButtonText = "PLAY";
    });
    this.player.on("playing", () => {
      this.playButtonText = "PAUSE";
    });
  },
  methods: {
    startPlay() {
      this.clickPlay = true;
      this.player.play();
      this.player.autoplay = true;
      setTimeout(() => {
        this.showStartButton = false;
      }, 300);
    },
    playOrPause() {
      this.player.togglePlay();
    },
    doShowInfo() {
      this.showInfo = true;
      this.setShowInfoTimer();
    },
    setShowInfoTimer() {
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.showInfo = false;
      }, 15000);
    },
    pickAUnplayedPlaylist() {
      let playedPlaylists = JSON.parse(localStorage.getItem("playedPlaylists"));
      let availablePlaylists = playlists.filter((p) => {
        if (
          playedPlaylists.includes(p.title) === false &&
          p.title !== this.playlist?.title
        )
          return p;
      });
      if (availablePlaylists.length !== 0) {
        return availablePlaylists[
          Math.floor(Math.random() * availablePlaylists.length)
        ];
      } else {
        localStorage.setItem("playedPlaylists", JSON.stringify([]));
        return this.pickAUnplayedPlaylist();
      }
    },
    nextVideo() {
      this.setShowInfoTimer();
      let videoID = null;
      if (this.playingVideoID === null) {
        videoID = this.playlist.videos[0];
      } else {
        let currentIndex = this.playlist.videos.indexOf(this.playingVideoID);
        videoID = this.playlist.videos[currentIndex + 1];
        if (videoID === undefined) {
          this.nextPlaylist();
          return;
        }
      }
      console.log({ videoID });
      this.playingVideoID = videoID;
      this.player.source = {
        type: "video",
        sources: [
          {
            src: videoID,
            provider: "youtube",
          },
        ],
      };
    },
    nextPlaylist() {
      this.playlist = this.pickAUnplayedPlaylist();
      this.playingVideoID = null;
      this.nextVideo();
    },
    toYouTube() {
      window.open(`https://www.youtube.com/watch/${this.playingVideoID}`);
    },
    toQier222() {
      window.open("https://github.com/qier222");
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

body {
  margin: 0;
  font-weight: 600;
  font-family: Inter, sans-serif;
}

.plyr {
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

.plyr__video-embed iframe {
  top: -50%;
  height: 200%;
}

.grey {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: saturate(160%) contrast(110%) brightness(104%);
  z-index: 1;
}

.stay-vibrant {
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  mix-blend-mode: difference;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 8rem;
  font-weight: 700;

  span {
    cursor: pointer;
  }
}

.info {
  color: #fff;
  position: fixed;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  mix-blend-mode: difference;
  z-index: 2;
  font-size: 18px;

  .link:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 32px 0 32px;
    .title {
      font-size: 64px;
      font-weight: 700;
    }
    .menu div {
      margin-right: 18px;
    }
  }

  .bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px 17px 32px;

    .title {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 8px;
    }
    .subtitle {
      font-size: 18px;
      font-weight: 600;
    }
    .controls {
      display: flex;
      align-items: center;
      font-size: 24px;
      cursor: pointer;
      user-select: none;
      .play {
        margin-right: 48px;
        transition: all 0.4s;
        &:hover {
          letter-spacing: 2px;
        }
      }
      .next {
        margin-right: 24px;
        transition: all 0.4s;
        &:hover {
          letter-spacing: 2px;
        }
      }
    }
  }
}

.play-button-layout {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 200;

  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes zooms {
    0% {
      height: 360px;
      width: 360px;
    }
    100% {
      height: 100vh;
      width: 100vw;
    }
  }

  .play-button {
    height: 320px;
    width: 320px;
    box-shadow: 0 0 0 4069px rgba(0, 0, 0, 0.98);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    font-size: 64px;
    color: #fff;
    backdrop-filter: blur(12px);

    transition: all 0.6s;

    &:hover {
      letter-spacing: 4px;
      height: 360px;
      width: 360px;
    }
  }

  .play-animation {
    cursor: default;
    animation-duration: 0.3s;
    animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0);
    animation-name: zooms;
    animation-fill-mode: forwards;
    backdrop-filter: none;
    color: rgba(255, 255, 255, 0);
  }
}
</style>
