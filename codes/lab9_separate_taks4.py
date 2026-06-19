import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay, accuracy_score

emails = np.array([
    "Win a free iPhone now",
    "Claim your cash prize today",
    "Limited time offer click now",
    "Congratulations you won a lottery",
    "Get cheap loans instantly",
    "Meeting at 3 pm tomorrow",
    "Please review the project report",
    "Let us schedule a call",
    "Lunch with team today",
    "Can you send me the notes",
    "Exclusive deal just for you",
    "Earn money fast from home",
    "Important update about your account",
    "Project deadline is next week",
    "Join us for dinner tonight",
    "Cheap meds available online",
    "You have been selected for a reward",
    "Let me know your availability",
    "Submit the assignment by Monday",
    "Your invoice is attached"
])

labels = np.array([
    1, 1, 1, 1, 1,
    0, 0, 0, 0, 0,
    1, 1, 1, 0, 0,
    1, 1, 0, 0, 0
])

X_train, X_test, y_train, y_test = train_test_split(
    emails, labels, test_size=0.3, random_state=42
)

vectorizer = TfidfVectorizer(stop_words='english')
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

k_values = [1, 3, 5, 7]
accuracies = []

for k in k_values:
    model = KNeighborsClassifier(n_neighbors=k)
    model.fit(X_train_vec, y_train)
    y_pred = model.predict(X_test_vec)
    acc = accuracy_score(y_test, y_pred)
    accuracies.append(acc)
    print(f"K={k}, Accuracy={acc:.4f}")

best_k = k_values[np.argmax(accuracies)]
best_model = KNeighborsClassifier(n_neighbors=best_k)
best_model.fit(X_train_vec, y_train)
best_pred = best_model.predict(X_test_vec)

print("Best K:", best_k)

cm = confusion_matrix(y_test, best_pred)
disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=["Not Spam", "Spam"])
disp.plot()
plt.title("Confusion Matrix")
plt.show()

plt.plot(k_values, accuracies, marker='o')
plt.title("KNN Classification: K vs Accuracy")
plt.xlabel("K")
plt.ylabel("Accuracy")
plt.show()