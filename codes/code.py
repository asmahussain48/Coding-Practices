import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_blobs

# 1. Creating the Dataset

X, y = make_blobs(
    n_samples=500,
    n_features=2,
    centers=3,
    random_state=42
)



# 2. Initializing K

k = 3
np.random.seed(42)

clusters = {}

for i in range(k):
    center = 2 * (2 * np.random.random((X.shape[1],)) - 1)
    clusters[i] = {
        "center": center,
        "points": []
    }

#3. Distance Function

def distance(p1, p2):
    return np.sqrt(np.sum((p1 - p2) ** 2))

#4. Assign clusters

def assign_clusters(X, clusters):
    # reset points
    for i in range(k):
        clusters[i]["points"] = []

    # assign points
    for x in X:
        distances = []

        for i in range(k):
            distances.append(distance(x, clusters[i]["center"]))

        cluster_idx = np.argmin(distances)
        clusters[cluster_idx]["points"].append(x)

    return clusters

#5. Updating Centers
def update_clusters(clusters):
    for i in range(k):
        points = np.array(clusters[i]["points"])

        if len(points) > 0:
            clusters[i]["center"] = points.mean(axis=0)

    return clusters

# 6. Running K-Mean Iterations

iterations = 10

for _ in range(iterations):
    clusters = assign_clusters(X, clusters)
    clusters = update_clusters(clusters)

# 7.Predicting Labels

def predict(X, clusters):
    pred = []

    for x in X:
        distances = []

        for i in range(k):
            distances.append(distance(x, clusters[i]["center"]))

        pred.append(np.argmin(distances))

    return pred

labels = predict(X, clusters)

# 8. Visualizing

plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')

for i in clusters:
    center = clusters[i]["center"]
    plt.scatter(center[0], center[1], marker='*', s=200, c='red')

plt.title("K-Means Clustering Result (K=3)")
plt.grid(True)
plt.show()



