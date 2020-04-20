import { ModuleProps as TModule } from "../components/Module";

export const Results: TModule = {
  heading: "Methodology",
  sections: [
    {
      title: "Unsupervised segmentation",
      text:
        "In general, unsupervised segmentation produced high-quality results.  In the following sections, we will go over the specific results of our experiments, as well as discuss our strategies for problematic outliers."
    },
    {
      image: "classes",
      imageCaption: "12 Classes of Plants - Segmented Images",
      imageDescription:
        "Black-Grass, Charlock, Cleavers, Common Chickweed, Common Wheat, Fat Hen, Loose Silky-Bent, Maize, Scentless Mayweed, Shepherd’s Purse, Small-Flowered Cranesbill, Sugar Beet (left to right; top to bottom)"
    },
    {
      subtitle: "RGB vs. HSV",
      text:
        "Initial naive clustering within RGB-space allowed for determining the optimal number of centers using the elbow method which resulted in a consistent range of cluster numbers k=[3,6] for all weeds and cash crops within the dataset."
    },
    {
      image: "elbow-rgb",
      imageCaption: "Elbow Method for RGB Quantization",
      imageDescription:
        "These representative results indicate an optimal k-value in the range [3,6]."
    },
    {
      image: "quant-rgb",
      imageCaption: "Results of RGB Quantization",
      imageDescription:
        "The loss of the plant body and confusion with the background consistently occurs for plant bodies that are sparse"
    },
    {
      text:
        "Similarly, applying the elbow method to hue-quantization within HSV-space produced the same optimal number of cluster centers as with RGB-space, but with much lower loss values."
    },
    {
      image: "elbow-hsv",
      imageCaption: "Elbow Method for Hue Quantization",
      imageDescription:
        "These representative results indicate an optimal k-value in the range [3,6].",
      imagePos: "left"
    },
    {
      image: "quant-hsv",
      imageCaption: "Results of Hue Quantization",
      imageDescription:
        "The plant body is retained, as the hue information for the plant body is more likely to be a centroid for clustering.",
      imagePos: "left"
    },
    {
      image: "perf",
      imageCaption: "RGB/HSV Time Ratio",
      imageDescription: "HSV quantization is multiple times faster.",
      imagePos: "left"
    },
    {
      text:
        "Segmentation using the “optimal” k-range for RGB-quantization assigns the plant body to background centroids for images in which plant body pixels are sparse.  This is particularly egregious for “grass”-type plant bodies (See Figure 3.2).  However, hue-quantization doesn’t suffer from these issues (See Figure 3.3).  Therefore, we decided to primarily use hue-quantization moving forward."
    },
    {
      subtitle: "Finding Optimal k",
      text:
        "In order to determine the best k-value for each image, we calculate the silhouette score of each pixel with respect to its cluster label and determine the average over all observations.  This was conducted with respect to the hue feature.  Then, we pick the number of clusters associated with the silhouette score closest to 1.  In Figures 3.6 and 3.7, we plot each observation’s silhouette value within its assigned cluster."
    },
    {
      image: "rep-bg",
      imageCaption: "Representative Weed (Black Grass)",
      imageDescription:
        "Silhouette analysis of the image indicates a sparse plant body within the image with a best k-value of 3.",
      imagePos: "left"
    },
    {
      image: "rep-maize",
      imageCaption: "Representative Crop (Maize)",
      imageDescription:
        "Silhouette analysis of the image indicates a sparse plant body within the image with a best k-value of 4.",
      imagePos: "left"
    },
    {
      text:
        "We can see that both the shape of the curve, as well as the average value, correspond to the quality of the cluster assignment. This process requires downsampling the image to reasonable observation size (n <= 10^4), but leads to reasonable performance prior to segmentation. We can qualitatively assess the validity of our cluster number determination with segmentation results implemented with non-green suppression."
    }
  ]
};
