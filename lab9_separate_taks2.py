import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error

size = np.array([1000, 1200, 1500, 1800, 2000, 2200, 2500, 2800, 3000, 3200])
location_score = np.array([4, 5, 6, 5, 7, 8, 6, 9, 8, 10])
rooms = np.array([2, 3, 3, 4, 4, 5, 5, 6, 6, 7])
price = np.array([150000, 180000, 210000, 250000, 280000, 320000, 355000, 400000, 430000, 470000])

X = np.column_stack((size, location_score, rooms))
y = price

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

print("Intercept:", model.intercept_)
print("Coefficients:")
print("Size:", model.coef_[0])
print("Location Score:", model.coef_[1])
print("Rooms:", model.coef_[2])

mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)

print("MAE:", mae)
print("MSE:", mse)

feature_names = ["Size", "Location Score", "Rooms"]
most_important = feature_names[np.argmax(np.abs(model.coef_))]
print("Most important feature:", most_important)