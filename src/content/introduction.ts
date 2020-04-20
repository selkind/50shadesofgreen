import { ModuleProps as TModule } from "../components/Module";

export const Introduction: TModule = {
  heading: "Introduction",
  sections: [
    {
      text:
        "Successful crop cultivation depends on weed control during the initial weeks of planting.  Recently, area-saturation pesticide usage preferentially supplanted mechanical weed control but failed to completely eliminate weed problems.  As such, site-specific pesticide application is needed to reduce overall pesticide usage. Thus, rapidly identifying sparsely-distributed weeds is crucial for the agricultural sector."
    },
    {
      title: "Data",
      text:
        "Researchers from University of Southern Denmark and Aarhus University publicly released a dataset to facilitate ML-based weed classification during nascent phases and intervention prior to their negative influence on cash crop growth. The data set comprises 5, 539 images of seedlings grown in consistent indoor conditions, taken at 2-3 day intervals over a 20-day period, labelled by species (3 crop, 9 weed species), and with a resolution of 10 pixel-per-millimeter. The dataset has been published on Kaggle.com (https://www.kaggle.com/vbookshelf/v2-plant-seedlings-dataset/kernels)."
    },
    {
      image: "data",
      imagePos: "left",
      imageCaption: "12 Classes of Plants - Input Images",
      imageDescription:
        "Black-Grass, Charlock, Cleavers, Common Chickweed, Common Wheat, Fat Hen, Loose Silky-Bent, Maize, Scentless Mayweed, Shepherd’s Purse, Small-Flowered Cranesbill, Sugar Beet (left to right; top to bottom)"
    },
    {
      title: "Previous work",
      text:
        "Convolutional Neural Networks (CNNs) have been shown to be ideally suited for image classification tasks. Since the publication of the dataset on Kaggle, there have been several attempts at using CNNs to classify images from this dataset by species."
    },
    {
      text:
        "Alimboyong et. al. from the Technological Institute of the Philippines used extensive data augmentation to increase the size of the dataset to 118,750 images. 83,126 of these were applied to train a CNN with an AlexNet architecture through transfer learning from weights initialized on the ImageNet dataset. This model achieved 99.74% accuracy on the augmented test set. While impressive, this model took 99 hours to train, not including augmented dataset creation, making this approach infeasible for real-world applications. Since agricultural needs vary widely, a cheaper approach would allow each cultivator to produce a classification model trained on relevant crop and weed species in the environment in which the model will be applied; yielding better results."
    },
    {
      text:
        "Kaggle user “Marsh” takes the opposite approach. Citing the class imbalance present in the dataset, they seek to train an effective model by downsampling the over-represented plant species to 250 images per species. A custom architecture was used with randomly initialized weights. After 40 training epochs, this model correctly classified 79% of the test set. The smaller training set and light-weight architecture resulted in a drastically shorter training time of 400 seconds."
    }
  ]
};
