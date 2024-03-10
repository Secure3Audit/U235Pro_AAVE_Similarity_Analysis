# U235Pro_AAVE_Similarity_Analysis

## Purpose
The primary objective of this analysis is to assess the code similarity between the **[a sub-folder of the source repo](#source)** and the **[target repo](#target)**. 

Our engineering team has embarked on a detailed direct comparison of the code repositories. This examination aims to accurately quantify and understand the extent of similarity.

Our analysis result can be found in the **[conclusion](#conclusion)**.


## Code Repos

#### Source
* https://github.com/U235-pro/contracts-internal/tree/main/contracts-internal
    * commit hash: `707783347f9088596c7eb508a415c422d07f2d81`


#### Target
* https://github.com/aave/aave-v3-core
    * commit hash: `6d6fa53d360b43f492ff5b3c7033f95aee4f1335`

A copy of the codes has also been cloned into [source_code/](source_code/contracts-internal/contracts-internal/) and [target_code/](target_code/aave-v3-core/) for reference. The `.git` has been removed for both.


## Conclusion
Based on our comparison, we conclude that the **[source](#source)** is a subset of the **[target](#target)** with approximately `7156` loc reduction.

Prior security assessments on target repos can be a good reference. Readers of this analysis, based on your security requirements, should determine on their own whether or not to directly trust the prior or existing security assessments or audits on target repos.


## Methodology for Similarity Comparison
We utilized two tools for the similarity analysis:
1. `git diff --numstat`: https://git-scm.com/docs/git-diff
2. `cloc`: https://github.com/AlDanial/cloc


## Comparison Detail

####  `git diff` output

```
git diff source_code/contracts-internal/contracts-internal/ target_code/aave-v3-core/ --numstat | grep .sol > results/git_diff.txt
```

output: [results/git_diff.txt](results/git_diff.txt)


#### `cloc` output

```
cloc --not-match-f="(example|test|tests|mock|Mock)" --exclude-dir=mock,mocks,test,debug,template,open-zeppelin,lib,dependencies,interfaces --include-ext=sol --diff target_code/aave-v3-core source_code/contracts-internal/contracts-internal > results/cloc_diff_concise.txt
 ```

 output: [results/cloc_diff_concise.txt](results/cloc_diff_concise.txt)

```
github.com/AlDanial/cloc v 1.98  T=0.17 s (355.5 files/s, 65858.5 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
Solidity
 same                            0              0              0              0
 modified                        0              0              0              0
 added                           1              1              2              6
 removed                        58           1284           2482           7156
-------------------------------------------------------------------------------
SUM:
 same                            0              0              0              0
 modified                        0              0              0              0
 added                           1              1              2              6
 removed                        58           1284           2482           7156
-------------------------------------------------------------------------------
```

**We see about `7156` lines of code removed.**


Get a more detailed result:
```
cloc --by-file --not-match-f="(example|test|tests|mock|Mock)" --exclude-dir=mock,mocks,test,debug,template,open-zeppelin,lib,dependencies,interfaces --include-ext=sol --diff target_code/aave-v3-core source_code/contracts-internal/contracts-internal > results/cloc_diff.txt
```

output: [results/cloc_diff.txt](results/cloc_diff.txt)