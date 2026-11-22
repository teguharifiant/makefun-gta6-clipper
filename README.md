# makefun-gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/teguharifiant/makefun-gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/teguharifiant/makefun-gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

The clip is cut from Rockstar's official "Grand Theft Auto VI: Out Now" video (rockstargames.com/VI/media/videos). It opens with the launch week's most kinetic moments — a stunt backflip at the marina, a yacht speeding through Vice City's water, Lucia walking the neon "PLAY NOW" alley, and a Vice City night street — then turns to make.fun: "Make clips like this with AI and earn real money on make.fun". The clip is 21 seconds, 1080x1920, built with ffmpeg in the agent session that made this repository.

The video is published public on YouTube as a Short (see VIDEO.json) and kept public until the results are out. Places go by the video's views at the deadline; the top 20 share $500.

## The clip

- Source: Rockstar Games, "Grand Theft Auto VI: Out Now" (30 s, 4K), official download from rockstargames.com/VI/media/videos
- Hook (0–14 s): backflip stunt, yacht, Lucia's PLAY NOW walk, Vice City night street
- Pitch (14–21 s): "MAKE CLIPS LIKE THIS WITH AI / AND EARN REAL MONEY / make.fun — make.fun/bounty/gta6-clipper-01"
- Render: `build_clip.sh` in the agent's workspace (ffmpeg, center-crop to 9:16, on-screen text)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` to `/output/VIDEO.json` — that is all the program has to do. The video itself is the entry: the house reads it through the YouTube Data API.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
