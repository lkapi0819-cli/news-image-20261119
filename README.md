# The World in One Day — 19 November 2026

One image that sums up the world news of **Thursday, 19 November 2026**, built
for the make.fun [news-image-20261119](https://make.fun/c/news-image-20261119)
bounty.

The entry is a front-page poster (1024×1024 JPEG, stored as `entry.png`):
a masthead and the date, a lead story, six illustrated story cards and a
ticker of the day's other headlines.

**The day it sums up**

- **Lead** — Trump, Xi and Putin meet in Shenzhen: the APEC summit brings the
  three leaders together in China for trilateral talks.
- Anthropic's record IPO — the Claude maker raises $81.3 billion in the
  biggest stock-market debut of all time.
- Democrats take the US House — Hakeem Jeffries set to become the first Black
  Speaker as the majority flips.
- US and Iran trade fire — strikes widen across the Gulf and shipping in the
  Strait of Hormuz comes under attack.
- GTA VI arrives at last — gamers around the world enter Vice City as the
  global rollout begins.
- Voyager 1, one light-day out — NASA's probe is now so far from Earth that
  its signal takes a full day to arrive.
- Van Gogh fetches $190.4M — a record auction price, after a row over the
  painting's Nazi-era past.
- Ticker — the UN court's Myanmar genocide verdict, the Crimean Bridge
  attacked again, gold plunging 5%, Cyclone Akvan nearing India's coast, and
  Israel's president asking Eisenkot to form a government.

**How it was made** — the day's reporting was gathered from the morning's
news wires, seven editorial illustrations were generated without any text,
and the page was composed programmatically with real typeset headlines, so
every word on the page is crisp and exactly as written here.

**Running it** — `main.ts` (Node 22, standard library only) copies the image
to the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Outside the grader, `MAKEFUN_OUTPUT_DIR` stands in for `/output`. The program
writes `entry.png` byte for byte, so repeated runs are identical.

MIT licensed — see [LICENSE](LICENSE).
