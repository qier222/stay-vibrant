export interface Video {
  id: string;
  filename?: string;
  startTime?: number;
  remark?: string;
  showGreyLayer?: boolean;
  specialBigTitle?: string;
}

export interface Playlist {
  title: string;
  dj: string;
  showGreyLayer?: boolean;
  specialBigTitle?: string;
  videos: Video[];
}

export const playlists: Playlist[] = [
  {
    title: "Secret Sky [mixed feelings 1]",
    dj: "San Holo",
    videos: [
      {
        id: "hd2Uv_OFtZ0",
        filename: "San Holo @ Secret Sky 2020 [mixed feelings 1].webm",
      },
    ],
  },
  {
    title: "Digital Mirage [mixed feelings 2]",
    dj: "San Holo",
    videos: [
      {
        id: "QcA8PJybAas",
        filename: "San Holo @ Digital Mirage [mixed feelings 2].webm",
      },
    ],
  },
  {
    title: "Monster Energy Up & Up Virtual Festival [mixed feelings 3]",
    dj: "San Holo",
    videos: [
      {
        id: "0_VIvjGrwlg",
        filename:
          "San Holo @ Monster Energy Up & Up Virtual Festival [mixed feelings 3].webm",
      },
    ],
  },
  {
    title: "goodbye 2020 set [mixed feelings 4]",
    dj: "San Holo",
    videos: [
      {
        id: "MzUncD8mbzc",
        filename: "San Holo - goodbye 2020 set [mixed feelings 4] ❤️🥺.webm",
      },
    ],
  },
  {
    title: "Live from the Aquarium",
    dj: "Elderbrook",
    videos: [
      {
        id: "WibjzL3fF1o",
        filename: "Elderbrook – Live from the Aquarium livestream.webm",
      },
    ],
  },
  {
    title: "NURTURE LIVE @ SECRET SKY 2021",
    dj: "Porter Robinson",
    videos: [
      {
        id: "THjekE5p2aw",
        filename: "PORTER ROBINSON NURTURE LIVE @ SECRET SKY 2021.webm",
      },
    ],
  },
  {
    title: "CANDY II Special Performance (Digital Mirage Friendsgiving)",
    dj: "Louis The Child",
    videos: [
      {
        id: "vj2BUBh6nUk",
        filename:
          "Louis The Child - CANDY II Special Performance (Digital Mirage Friendsgiving).webm",
      },
    ],
  },
  {
    title: "Digital Mirage",
    dj: "Party Pupils",
    videos: [
      {
        id: "xKmokX3zqHY",
        filename: "Party Pupils - Digital Mirage (Official Full DJ Set).webm",
      },
    ],
  },
  {
    title: `"Stay In Your Damn House" Dim Mak Livestream`,
    dj: "Party Pupils",
    videos: [
      {
        id: "n5KDSO5BH2Q",
        filename:
          'Party Pupils - "Stay In Your Damn House" Dim Mak Livestream.webm',
      },
    ],
  },
  {
    title: "Parachute",
    dj: "Petit Biscuit",
    videos: [
      {
        id: "Hb0C16l9Msc",
        filename: "Petit Biscuit - Parachute Album (Lyrics).webm",
      },
    ],
  },
  {
    title: "Tchami B2B Dr. Fresch Live Set (Digital Mirage Friendsgiving)",
    dj: "Dr. Fresch & Tchami",
    videos: [
      {
        id: "T_SmY0jy1DY",
        filename:
          "Tchami B2B Dr. Fresch Live Set (Digital Mirage Friendsgiving).webm",
      },
    ],
  },
  {
    title: "Infinity Set",
    dj: "Duskus",
    showGreyLayer: false,
    videos: [{ id: "D72Kkvk--20", filename: "Duskus Infinity Set ⚡.webm" }],
  },
  {
    title: "FIFA 21 World Premiere",
    dj: "Louis The Child",
    videos: [
      {
        id: "sgLC5EAVmTU",
        filename: "Louis The Child - FIFA 21 World Premiere (DJ Set).webm",
      },
    ],
  },
  {
    title: "Hi This Is Flume",
    dj: "Flume",
    videos: [
      {
        id: "7TML_MTQdg4",
        filename: "Hi This Is Flume [Mixtape Visualiser].webm",
      },
    ],
  },
  {
    title: "MADEON DJ SET (Secret Sky Festival)",
    dj: "Madeon",
    videos: [
      {
        id: "PSRdKi2GscM",
        filename: "MADEON DJ SET (Secret Sky Festival).webm",
      },
    ],
  },
  {
    title: "Secret Sky Set",
    dj: "Porter Robinson",
    videos: [
      {
        id: "4KGsgpFiswQ",
        filename: "Porter Robinson - Secret Sky Set (2020).webm",
      },
    ],
  },
  {
    title: "Sunrise Set - Grand Lake, CO",
    dj: "Lane 8",
    showGreyLayer: false,
    videos: [
      {
        id: "n_LcVqqHSY8",
        filename: "Lane 8 - Sunrise Set - Grand Lake, CO.webm",
      },
    ],
  },
  {
    title: "Digital Mirage 2",
    dj: "MALAA",
    videos: [
      {
        id: "M23FTVwWiMk",
        filename: "MALAA - Digital Mirage 2 [Full Set].webm",
      },
    ],
  },
  {
    title: "Digital Mirage 2",
    dj: "Deathpact",
    videos: [
      {
        id: "WghXuwBsrnc",
        filename: "Deathpact - Digital Mirage 2 [Full Set].webm",
      },
    ],
  },
  {
    title: "Digital Mirage 3 Friendsgiving",
    dj: "Voltra",
    videos: [
      {
        id: "nIIHvLJaytU",
        filename: "Voltra @ Digital Mirage 3 Friendsgiving.webm",
      },
    ],
  },
  {
    title: "Digital Mirage 2020",
    dj: "Ookay",
    videos: [
      {
        id: "e1BaOpDOAvs",
        filename:
          "Ookay Live - Digital Mirage 2020 (Official Full Live Set).webm",
      },
    ],
  },
  {
    title: "Nomad Series",
    dj: "shallou",
    specialBigTitle: "NOMAD",
    videos: [
      {
        id: "Z18DVla-tPw",
        remark: "Sigh",
        filename: "shallou - Sigh - Nomad Series.webm",
      },
      {
        id: "wheZ0p65Gbo",
        filename: "shallou - Vignette - Nomad Series.webm",
      },
      {
        id: "KW7Mj97DkAE",
        filename: "Petit Biscuit, Shallou - I Leave Again - Nomad Series.webm",
      },
      {
        id: "c3gqG_vbjp8",
        filename:
          "shallou x Kasbo - Find (with Cody Lovaas) - Nomad Series.webm",
      },
      {
        id: "32wBvatTyGs",
        filename: "shallou - . . . Lost - Nomad Series.webm",
      },
      {
        id: "duXW2KRyEDo",
        filename: "shallou - Skin - Nomad Series.webm",
      },
      {
        id: "kTthxT9mpOA",
        filename: "shallou - Lie (feat. Riah) - Nomad Series.webm",
      },
      {
        id: "2ECgQTZojR4",
        filename: "shallou - Begin (feat. Wales) - Nomad Series.webm",
      },
      {
        id: "1trifshoIw0",
        filename: "shallou - You and Me - Nomad Series.webm",
      },
      {
        id: "CBz3HbWyCjQ",
        filename: "shallou - Fictions - Nomad Series.webm",
      },
      {
        id: "yqTBC5K4Xa8",
        filename: "shallou - Last Day . . . - Nomad Series.webm",
      },
      {
        id: "UMMRe-mVJIM",
        filename: "shallou - . . . Love - Nomad Series.webm",
      },
      {
        id: "0DZKc96T-RU",
        filename: "shallou - Truth - Nomad Series.webm",
      },
      {
        id: "FzYzmXlo_3g",
        filename: "Shallou - Older with Daya (Nomad Visualizer).webm",
      },
    ],
  },
  {
    title: "A STUDY IN MOVEMENT",
    dj: "BAYNK",
    videos: [
      {
        id: "nzW8h9eIPAc",
        filename:
          "BAYNK - A STUDY IN MOVEMENT (NO. 1): DOWN feat. Golden Vessel & Akurei [Official.webm",
      },
      {
        id: "WPFKHtoPv7Q",
        filename:
          "BAYNK - A STUDY IN MOVEMENT (NO. 2): HIGH [Official Music Video].webm",
      },
      {
        id: "fEmab1pJcbM",
        filename:
          "BAYNK - A STUDY IN MOVEMENT (NO. 3): KISS ME feat. Mood Talk [Official Music Vid.webm",
      },
      {
        id: "9zIaIn6D6ik",
        filename:
          "BAYNK - A STUDY IN MOVEMENT (NO. 4): TESSELLATE feat. Tei Shi [Official Music Vi.webm",
      },
    ],
  },
  {
    title: "We Dream Worlds (Special Guest Set)",
    dj: "Ookay",
    videos: [
      {
        id: "PqMR0OUvwKE",
        filename: "Ookay - We Dream Worlds (Special Guest Set).webm",
      },
    ],
  },
  {
    title: "Secret Sky 2021",
    dj: "Swardy",
    videos: [{ id: "lDBmnCOMXoI", filename: "Swardy at Secret Sky 2021.webm" }],
  },
  {
    title: "Live at SECRET SKY 2021",
    dj: "End of the World",
    videos: [
      {
        id: "vfPKNq34SV0",
        filename: "End of the World DJ Set -  Live at SECRET SKY 2021.webm",
      },
    ],
  },
  {
    title: "Secret Sky 2021",
    dj: "IMANU & Buunshin",
    videos: [
      { id: "FHwSghIG6VQ", filename: "IMANU B2B Buunshin @ Secret Sky.webm" },
    ],
  },
  {
    title: "Live from Joshua Tree",
    dj: "RÜFÜS DU SOL",
    videos: [
      {
        id: "Zy4KtD98S2c",
        filename: "RÜFÜS DU SOL - Live from Joshua Tree.webm",
      },
    ],
  },
  {
    title: "bb u ok?",
    dj: "San Holo",
    specialBigTitle: "bb u ok?",
    videos: [
      {
        id: "vPAhSrVTtgk",
        filename: "San Holo - bb u ok (Official Visualiser).webm",
      },
      {
        id: "LIZ_Hh_YhPg",
        filename:
          "San Holo - you’ve changed, i’ve changed (feat. Chet Porter) (Official Lyric vide.webm",
        showGreyLayer: false,
      },
      {
        id: "86ivUkT8RCY",
        filename: "San Holo - IT HURTS! (Official Lyric Video).webm",
        showGreyLayer: false,
      },
      {
        id: "rGuFmijn-Qw",
        filename:
          "San Holo - wheels up (feat. Rivers Cuomo of Weezer) (Official Video).webm",
      },
      {
        id: "Uk8laoyYnz4",
        filename: "San Holo - MY FAULT (Official Music Video).webm",
        showGreyLayer: false,
      },
      {
        id: "82E2sDcxf8c",
        filename:
          "San Holo - find your way (feat. Bipolar Sunshine) (Official Lyric Video).webm",
        showGreyLayer: false,
      },
    ],
  },
];
