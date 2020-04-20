export const Research = {
  heading: "Research objectives",
  sections: [
    {
      text:
        "Generally, the current practice for weed identification uses a CNN to classify images. The quality of the produced model depends heavily on the quality of the data set. Allunia highlights the danger of applying a model without examining how the model has extracted knowledge, especially when the data set is artificial and standardized. The lack of variation in our raw data set may yield a CNN model that does not generalize well."
    },
    {
      text:
        "In particular, target leakage of background pixels is a primary concern. Every seedling image is taken against a background of pebbles and/or a measuring stick. Different species of seedlings have different sizes at the same growth stage, meaning that pictures of smaller species will have a higher zoom level. A CNN can use the relative scale of the pebbles or measuring stick to classify the seedlings instead of using the features of the seedlings themselves. This is a problem because test data sets in the real world may have the seedlings against different types of backgrounds."
    },
    {
      text:
        "Another issue with this data set is an imbalance of class sizes. There are three crop species compared to nine weed species, and the number of images per species ranges from 253 to 762. The least represented species is common wheat, a cash crop whose correct classification is essential for industry. We add significant contributions to a combination of previous works to address these problems and produce a more accurate and generalized model."
    }
  ]
};
