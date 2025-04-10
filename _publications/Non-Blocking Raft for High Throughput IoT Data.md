---
title: "Non-Blocking Raft for High Throughput IoT Data"
collection: publications
category: database
permalink: /publications/Non-Blocking Raft for High Throughput IoT Data
date: 2023-7-26
venue: 'ICDE'
---

[论文地址](https://ieeexplore.ieee.org/abstract/document/10184820)

论文摘要
======
When analyzing time series, often interactively, the analysts frequently demand to visualize instantly large-scale data stored in databases. M4 visualization selects the first, last, bottom and top data points in each pixel column to ensure pixel-perfectness of the two-color line chart visualization. While M4 already shows its preciseness of encasing time series in different scales into a fixed size of pixels, how to efficiently support M4 representation in a time series native database is still absent. It is worth noting that, to enable fast writes, the commodity time series database systems, such as Apache IoTDB or InfluxDB, employ LSM-Tree based storage. That is, a time series is segmented and stored in a number of chunks, with possibly out-of-order arrivals, i.e., disordered on timestamps. To implement M4, a natural idea is to merge online the chunks as a whole series, with costly merge sort on timestamps, and then perform M4 representation as in relational databases. In this study, we propose a novel chunk merge free approach called M4-LSM to accelerate M4 representation and visualization. In particular, we utilize the metadata of chunks to prune and avoid the costly merging of any chunk. Moreover, intra-chunk indexing and pruning are enabled for efficiently accessing the representation points, referring to the special properties of time series. Remarkably, the time series database native operator M4-LSM has been implemented in Apache IoTDB, an open-source time series database, and deployed in companies across various industries. In the experiments over real-world datasets, the proposed M4-LSM operator demonstrates high efficiency without sacrificing preciseness.
