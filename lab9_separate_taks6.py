import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, accuracy_score

np.random.seed(42)

n = 200
study_hours = np.random.uniform(1, 10, n)
attendance = np.random.uniform(50, 100, n)
assignments = np.random.uniform(40, 100, n)

marks = 5*study_hours + 0.3*attendance + 0.4*assignments + np.random.normal(0, 5, n)
pass_fail = (marks >= 50).astype(int)

X = np.column_stack((study_hours, attendance, assignments))
y_reg = marks
y_clf = pass_fail

X_train, X_test, y_train_reg, y_test_reg, y_train_clf, y_test_clf = train_test_split(
    X, y_reg, y_clf, test_size=0.2, random_state=42
)

lr = LinearRegression()
lr.fit(X_train, y_train_reg)
y_pred_reg = lr.predict(X_test)

mse = mean_squared_error(y_test_reg, y_pred_reg)
print("Linear Regression MSE:", mse)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train_scaled, y_train_clf)
y_pred_clf = knn.predict(X_test_scaled)

acc = accuracy_score(y_test_clf, y_pred_clf)
print("KNN Classification Accuracy:", acc)