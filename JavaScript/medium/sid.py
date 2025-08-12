# Electricity Bill Prediction using Linear Regression

# 1. Import Libraries
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import matplotlib.pyplot as plt

# 2. Load Dataset
# Example CSV Columns: month, units_consumed, temperature, bill_amount
# Replace 'electricity_data.csv' with your dataset path
data = pd.read_csv('./sid.py')

# Display first 5 rows
print("Sample Data:\n", data.head())

# 3. Prepare Features and Target
# Features (X) can be customized (example: units_consumed & temperature)
X = data[['units_consumed', 'temperature']]
y = data['bill_amount']

# 4. Split Data into Train and Test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 5. Train the Model
model = LinearRegression()
model.fit(X_train, y_train)

# 6. Make Predictions
y_pred = model.predict(X_test)

# 7. Evaluate the Model
print("Mean Absolute Error (MAE):", mean_absolute_error(y_test, y_pred))
print("Mean Squared Error (MSE):", mean_squared_error(y_test, y_pred))
print("Root Mean Squared Error (RMSE):", np.sqrt(mean_squared_error(y_test, y_pred)))
print("R² Score:", r2_score(y_test, y_pred))

# 8. Predict for New Values
# Example: units_consumed = 350 units, temperature = 32°C
new_data = np.array([[350, 32]])  # shape (1,2)
predicted_bill = model.predict(new_data)
print(f"Predicted Bill for 350 units & 32°C: ₹{predicted_bill[0]:.2f}")

# 9. Plot Actual vs Predicted
plt.scatter(y_test, y_pred, color='blue')
plt.xlabel("Actual Bill Amount")
plt.ylabel("Predicted Bill Amount")
plt.title("Actual vs Predicted Bill Amount")
plt.show()
