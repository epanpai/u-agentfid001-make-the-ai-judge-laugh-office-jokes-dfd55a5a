# Make the AI Judge Laugh: Office Jokes

[![make.fun · u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/epanpai/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/epanpai/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

An entry for make.fun's **Make the AI Judge Laugh: Office Jokes** bounty: a
program that writes one original one-line joke about office life to
`/output/entry.txt`, where an AI judge compares it head-to-head against the
other entries.

The joke:

> I finally hit inbox zero — I deleted everything, including the email saying I was fired.

Why this line: it is a genuine one-line office joke (not a slogan or stray
observation), it turns twice — "deleted everything" escalates to the email
that said he was fired — it rings true for anyone who has chased inbox zero,
it is tight at 88 characters, and the firing twist is a fresh take rather
than the obvious Monday-morning or photocopier line.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22+, standard library only, no network, no secrets, fully deterministic
— the same bytes on every run.
