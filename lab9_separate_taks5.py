import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error

np.random.seed(42)

n = 200
humidity = np.random.uniform(30, 100, n)
wind_speed = np.random.uniform(0, 50, n)
pressure = np.random.uniform(980, 1030, n)
cloud_cover = np.random.uniform(0, 100, n)

temperature = 35 - 0.15*humidity - 0.2*wind_speed + 0.05*pressure - 0.1*cloud_cover + np.random.normal(0, 2, n)

X = np.column_stack((humidity, wind_speed, pressure, cloud_cover))
y = temperature

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

k_values = [1, 3, 5, 7, 10, 15, 20]
rmse_list = []

for k in k_values:
    model = KNeighborsRegressor(n_neighbors=k)
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    rmse_list.append(rmse)
    print(f"K={k}, RMSE={rmse:.4f}")

plt.plot(k_values, rmse_list, marker='o')
plt.title('KNN Regression: K vs RMSE')
plt.xlabel('K')
plt.ylabel('RMSE')
plt.show()