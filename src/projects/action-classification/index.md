---
title: Action Classification
topics: [computer vision, fine-tuning, RNNs, CNNs]
date: 2025-01-08
---

In this project, we used machine learning teachniques to classify human actions in short video clips.

### Motivation
Often times it can be helpful to classify what a person is doing on video footage, for instance for security or analysis.

### Dataset
We used the the benchmark dataset HMDB-51 [$$^1$$](https://serre-lab.clps.brown.edu/resource/hmdb-a-large-human-motion-database/) which is a dataset comprised of short clips of people performing various actions taken from YouTube or popular movies. A couple of frames from the videos in the dataset are shown below:

![Image of some action clips](/projects/action-classification/example_action_frames.png)

### Approach

Since the dataset are videos we tested whether capturing the time dependence could be integrated more effectively by a recurrent neural network structure (LSTM).
To compare our recurrent implementation to a competitive baseline, we finetuned a pretrained convolutional neural network (CNN) called VGG-16 on the training split. We then used the CNN to predict each frame of a video and used the mode of the predictions as the final classification of the model.

For the recurrent implementation, we extracted 20 frames per video. We then used our baseline CNN as an encoder that fed into the recurrent architecture as illustrated below:

<img src="/projects/action-classification/lstm_diagram.png" alt="The architecture of our recurrent model" width="500"/>

### Results

We found that the added recurrence was very beneficial since it boosted the accuracy of the recurrent models by around 15%. The best model achieved a **3-split-accuracy of 72.9%** which is relatively high considering the small model size and the simple architecture compared to state-of-the-art models which reach up to 90% accuracy.

For more details, check out the Jupyter notebook in the [GitHub repository](https://github.com/philipp-hellwig/human-action-classification).

### Limitations

    - our baseline is not the strongest
    - there is possibly some data leakage between training and test videos

### References

$$^1$$ https://serre-lab.clps.brown.edu/resource/hmdb-a-large-human-motion-database/

$$^2$$ https://paperswithcode.com/sota/action-recognition-in-videos-on-hmdb-51