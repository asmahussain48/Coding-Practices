import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures

np.random.seed(42)

experience = np.array([1,2,3,4,5,6,7,8,9,10]).reshape(-1,1)
salary = np.array([30000,35000,45000,60000,80000,110000,150000,200000,260000,330000])

model_linear = LinearRegression()
model_linear.fit(experience, salary)

x_range = np.linspace(1,10,100).reshape(-1,1)
y_linear = model_linear.predict(x_range)

degrees = [2,3,5]
poly_predictions = {}

for d in degrees:
    poly = PolynomialFeatures(degree=d)
    X_poly = poly.fit_transform(experience)
    model = LinearRegression()
    model.fit(X_poly, salary)
    X_range_poly = poly.transform(x_range)
    poly_predictions[d] = model.predict(X_range_poly)

plt.scatter(experience, salary)

plt.plot(x_range, y_linear, label='Linear')

for d in degrees:
    plt.plot(x_range, poly_predictions[d], label=f'Degree {d}')

plt.legend()
plt.title('Salary Growth Prediction')
plt.xlabel('Experience')
plt.ylabel('Salary')
plt.show()