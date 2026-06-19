def Eligibility(age, income, score, ban):
 Age = age >= '21'
 Income = income>= '300000'
 Score = score >= '650'
 return Age and Income and Score and ban

Age = input("Enter your Age: ")
Income = input("Enter your Annual income: ")
Credit_Score = input("Enter your score: ")
BankC = input("DO you have any active bankrupticies: yes->1 / no ->0 ")

check = Eligibility(Age, Income, Credit_Score, BankC)
if check:
 print("Eligibile for a loan")
else:
 print("Not Eligibile for a loan")