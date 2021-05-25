export interface Video {
  id: string;
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
    videos: [{ id: "hd2Uv_OFtZ0" }],
  },
  {
    title: "Digital Mirage [mixed feelings 2]",
    dj: "San Holo",
    videos: [{ id: "QcA8PJybAas" }],
  },
  {
    title: "Monster Energy Up & Up Virtual Festival [mixed feelings 3]",
    dj: "San Holo",
    videos: [{ id: "0_VIvjGrwlg" }],
  },
  {
    title: "goodbye 2020 set [mixed feelings 4]",
    dj: "San Holo",
    videos: [{ id: "MzUncD8mbzc" }],
  },
  {
    title: "Live from the Aquarium",
    dj: "Elderbrook",
    videos: [{ id: "WibjzL3fF1o" }],
  },
  {
    title: "Digital Mirage",
    dj: "Party Pupils",
    videos: [{ id: "xKmokX3zqHY" }],
  },
  {
    title: `"Stay In Your Damn House" Dim Mak Livestream`,
    dj: "Party Pupils",
    videos: [{ id: "n5KDSO5BH2Q" }],
  },
  {
    title: "Parachute",
    dj: "Petit Biscuit",
    videos: [{ id: "Hb0C16l9Msc" }],
  },
  {
    title: "Hi This Is Flume",
    dj: "Flume",
    videos: [{ id: "7TML_MTQdg4" }],
  },
  {
    title: "CANDY II Special Performance (Digital Mirage Friendsgiving)",
    dj: "Louis The Child",
    videos: [{ id: "vj2BUBh6nUk" }],
  },
  {
    title: "FIFA 21 World Premiere",
    dj: "Louis The Child",
    videos: [{ id: "sgLC5EAVmTU" }],
  },
  {
    title: "Infinity Set",
    dj: "Duskus",
    showGreyLayer: false,
    videos: [{ id: "D72Kkvk--20" }],
  },
  {
    title: "MADEON DJ SET (Secret Sky Festival)",
    dj: "Madeon",
    videos: [{ id: "PSRdKi2GscM" }],
  },
  {
    title: "Secret Sky Set",
    dj: "Porter Robinson",
    videos: [{ id: "4KGsgpFiswQ" }],
  },
  {
    title: "Sunrise Set - Grand Lake, CO",
    dj: "Lane 8",
    showGreyLayer: false,
    videos: [{ id: "n_LcVqqHSY8" }],
  },
  {
    title: "Tchami B2B Dr. Fresch Live Set (Digital Mirage Friendsgiving)",
    dj: "Dr. Fresch & Tchami",
    videos: [{ id: "T_SmY0jy1DY" }],
  },
  {
    title: "Digital Mirage 2",
    dj: "MALAA",
    videos: [{ id: "M23FTVwWiMk" }],
  },
  {
    title: "Digital Mirage 2",
    dj: "Deathpact",
    videos: [{ id: "WghXuwBsrnc" }],
  },
  {
    title: "Digital Mirage 3 Friendsgiving",
    dj: "Voltra",
    videos: [{ id: "nIIHvLJaytU" }],
  },
  {
    title: "Digital Mirage 2020",
    dj: "Ookay",
    videos: [
      {
        id: "e1BaOpDOAvs",
      },
    ],
  },
  {
    title: "Nomad Series",
    dj: "shallou",
    specialBigTitle: "NOMAD",
    videos: [{ id: "Z18DVla-tPw", remark: "Sigh" }],
  },
  {
    title: "A STUDY IN MOVEMENT",
    dj: "BAYNK",
    videos: [
      { id: "nzW8h9eIPAc" },
      { id: "WPFKHtoPv7Q" },
      { id: "fEmab1pJcbM" },
      { id: "9zIaIn6D6ik" },
    ],
  },
  {
    title: "NURTURE LIVE @ SECRET SKY 2021",
    dj: "Porter Robinson",
    videos: [{ id: "THjekE5p2aw" }],
  },
  {
    title: "We Dream Worlds (Special Guest Set)",
    dj: "Ookay",
    videos: [{ id: "PqMR0OUvwKE" }],
  },
  {
    title: "Secret Sky 2021",
    dj: "Swardy",
    videos: [{ id: "lDBmnCOMXoI" }],
  },
  {
    title: "Live at SECRET SKY 2021",
    dj: "End of the World",
    videos: [{ id: "vfPKNq34SV0" }],
  },
  {
    title: "Secret Sky 2021",
    dj: "IMANU & Buunshin",
    videos: [{ id: "FHwSghIG6VQ" }],
  },
];
