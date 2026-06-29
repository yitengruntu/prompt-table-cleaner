# Validation Log

## 2026-06-27 24h Read

Source links:

- Demo: https://yitengruntu.github.io/prompt-table-cleaner/
- Repo: https://github.com/yitengruntu/prompt-table-cleaner
- Reddit post: https://www.reddit.com/r/PromptEngineering/comments/1ug16w8/i_made_a_tiny_tool_to_clean_copied_tables_into/

Observed signals:

- Reddit comments: 0
- GitHub stars: 0
- GitHub forks: 0
- GitHub issues: 0
- GitHub visible public counters: 0

Interpretation:

This read is a distribution failure, not a product-demand verdict. There is no evidence that enough target users saw the tool. Do not add product features from this data.

Next action:

Run a second distribution test with a narrower, use-case-first angle: cleaning copied web or dashboard tables before pasting into ChatGPT, Claude, or Codex.

## 2026-06-27 ClaudeAI Attempt

Channel:

- `r/ClaudeAI` feed post.

Observed result:

- Main feed submission was blocked by subreddit karma requirements for Showcase posts.
- Moderator response routed the project to the Built with Claude Project Showcase Megathread.

Interpretation:

This is another channel-access failure rather than a demand signal. The next valid test is a comment in the approved Megathread, not another standalone `r/ClaudeAI` post.

Next action:

Submit a concise Megathread comment that asks for workflow feedback and links to the demo and repo.

## 2026-06-27 ClaudeAI Megathread Comment

Channel:

- Built with Claude Project Showcase Megathread.

Observed result:

- Owner submitted a Megathread comment with the demo and repo links.

Interpretation:

This is now a valid but low-volume distribution test. Do not add features until the 24-hour read shows comments, GitHub traffic, stars, clones, issues, or specific workflow requests.

Next action:

Read results 24 hours after the comment. If there are no comments and no GitHub activity, treat Reddit as an ineffective channel for this probe and move to the next distribution source or the next repo.

## 2026-06-29 GitHub Traffic Read

Source:

- Owner-provided GitHub Insights -> Traffic screenshot.
- Public GitHub API check for repo counters.

Observed signals:

- Clones in last 14 days: 47
- Unique cloners in last 14 days: 23
- Total views in last 14 days: 5
- Unique visitors in last 14 days: 2
- Stars: 0
- Forks: 0
- Issues: 0

Interpretation:

The high clone count with very low views is ambiguous. It may include bots, scanners, GitHub ecosystem crawlers, or direct clone activity from someone who saw the repo link. It is not a strong human-demand signal because there are no stars, issues, forks, comments, or workflow requests.

This does show that the repo is reachable and being cloned, but it does not justify building more product features yet.

Next action:

Check `Referring sites` and `Popular content` from GitHub Traffic. If they are empty or only GitHub/self traffic, treat this as non-decision-grade. If there is a real external referrer, run one more targeted distribution test there. Otherwise move to the next probe rather than continue development on Prompt Table Cleaner.

## 2026-06-29 Referrer Read

Source:

- Owner-provided GitHub Insights -> Traffic screenshot for `Referring sites` and `Popular content`.

Observed signals:

- Referring sites: `github.com`, 1 view, 1 unique visitor
- Popular content: `Overview`, 4 views, 2 unique visitors
- No visible `reddit.com` referrer

Interpretation:

The Reddit attempts did not create measurable GitHub referral traffic. The clone spike remains non-decision-grade because it is not tied to a real external referrer or a human interest action.

Decision:

Do not build more Prompt Table Cleaner features from this data. Treat the current Reddit channel test as failed for this probe.

Next action:

Move to the next probe or find a more targeted GitHub-native distribution source. Prompt Table Cleaner should stay parked unless a future direct user request, issue, star cluster, or credible referrer appears.
