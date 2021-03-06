import { ModuleProps as TModule } from "../components/Module";

export const Methodology: TModule = {
  heading: "Methodology",
  sections: [
    {
      text:
        "For this project, we investigated both supervised and unsupervised learning techniques to support the classification of weeds and crops."
    },
    {
      title: "Unsupervised segmentation",
      text:
        "Prior work upon the first dataset iteration indicated that target leakage of background is a major problem.  Therefore, we decided to employ unsupervised learning to segment the plant leaves from the background before training our supervised learners.  Without ground truth values for the plant body within the original dataset, our goals for unsupervised segmentation were to extract clear-enough leaves for passing to the supervised classifiers."
    },
    {
      text:
        "Intuitively, clustering within color-space presented the best option, since the target is fairly different from the background.  Since image color information is a bounded, continuous space, we decided that hard assignment along the color-information axes (and not spatial axes) would be sufficient and much more performant.  Therefore, we decided upon k-means clustering as our segmentation technique.  However, this posed three research questions:"
    },
    {
      list: [
        "Which color space is best to quantize?",
        "What is the optimal number of cluster centers to segment out the plant body?",
        "How do we avoid mislabeling due to reflectance and illumination changes?"
      ]
    },
    {
      text:
        "For the first research question, we compared plant body segmentation for the quantization of all color channels within RGB-space to the hue channel within HSV-space. To do so, we used the elbow method to generate a putative range of the number of clusters for each space, and then visually confirmed that segmentation would produce a cluster centroid corresponding to a plant body. Furthermore, we compared runtimes to determine which method was more performant, both in runtime and accuracy."
    },
    {
      image: "hsv",
      imagePos: "left",
      imageCaption: "HSV Space Cylinder - The HSV model mapped to a cylinder."
    },
    {
      image: "rgb",
      imagePos: "left",
      imageCaption: "RGB Space Cube - The RGB model mapped to a cube."
    },
    {
      text:
        "In addition, there exists the need to automatically determine the optimal number of clusters upon which to quantize hue information in order to facilitate rapid segmentation.  To do so, we utilized the putative range of cluster numbers from the elbow method to calculate the average silhouette value for all clusters, retaining the number of clusters with the maximum average silhouette value."
    },
    {
      text:
        "However, hue-quantization presents the additional challenge of illumination changes affecting diffuse reflection of green hues off of white surfaces (See Figure 2.3).  To resolve this, we investigated two processes: (1) thresholding, which is a pre-process that removes all near-white pixels before segmentation, and (2) cascading segmentation, which implements two rounds of segmentation within alternating color spaces."
    },
    {
      text:
        "Once our images are pre-processed, we can implement k-means clustering upon just the relevant channels.  The resultant image can be processed with non-green suppression to extract the pixels corresponding to the plant body before passing the processed images to the supervised learners. In case multiple “green” hues are retained, we implemented two different methods:"
    },
    {
      list: [
        "MaxGreen, which segments according to the most common green hue found in the image, or",
        "AllGreen, which segments according to all possible green hues found as cluster centers. Figure 2.3 shows the entire segmentation pipeline."
      ]
    },
    {
      title: "Supervised classification",
      text:
        "Given labels for the input images, as well as segmented versions of the images, we wished to build classification models to distinguish both between weeds and crops.  We compared a Random Forest to a Neural Network, which we will describe below."
    },
    {
      subtitle: "Random forest",
      text:
        "Since quickly training models is a desirable feature of the model, it is important to research the performance difference in classification between Random Forest and Neural Networks.  In the investigation, Random Forest models were created for both binary classification between weeds and crops, as well as classification between the comprehensive list of labels.  Since images were segmented through k-means, models were also trained on the segmented images."
    },
    {
      text:
        "In order to train the Random Forest model, features need to be extracted that differentiate between images. Pixel color histograms were generated for the color images, as well as pixel intensities for grayscale images.  Bin values were then extracted as linear features.  In addition, multidimensional histograms using AND logic were created for the red, green, and blue-values as well:  One for all three together and two for red/green and blue/green.  For example, one bin would be for how many pixels have red, green and blue values between 0 and 10. The histograms can be seen plotted below:"
    },
    {
      subtitle: "Neural network classifier",
      text:
        "We aim to develop a CNN image classifier that yields accurate results without a resource or time-intensive training process; all while dealing with the issues inherent in this dataset. To address the class imbalance, we create a balanced dataset by undersampling all classes down to 253 images per species. We create a training set and a testing set using an 80/20 split. We use 80% of the training set for training and 20% for validation. These splits yield 1948 training images, 488 validation images, and 600 testing images. To compensate for this relatively small dataset, we use the Xception model architecture and use initial weights that have been trained on the ImageNet dataset."
    },
    {
      text:
        "The model was trained using the Adam optimizer with an initial learning rate of 0.0001 for 60 epochs. Training data was fed to the model in batches of 32 images. After each epoch, the validation accuracy was calculated. If the validation accuracy did not improve for three consecutive epochs, the learning rate was reduced by a factor of ⅕ with a minimum possible learning rate of 0.000001. If the validation accuracy did not improve for 10 consecutive epochs, training was ended and the model was saved with the weights that yielded the highest validation accuracy."
    },
    {
      text:
        "This training procedure was repeated to train a model using the segmented images created by the process described above. The performance of these two models can be used to characterize the impact of background target leakage."
    }
  ]
};
