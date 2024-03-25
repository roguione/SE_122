# Exercise 1
# Create a list named students containing some student names (strings).
# Print out the second student’s name.
# Print out the last student’s name.

students = ["Alice", "Bob", "Charlie", "David", "Emma"]

print("Second student's name:", students[1])
print("Last student's name:", students[-1])

# Exercise 2
# Create a tuple named foods containing the same number of foods (strings) as there are names in the students list.
# Use a for loop to print out the string “[food goes here] is a good food”.

foods = ("Pizza", "Burger", "Sushi", "Taco", "Pasta")

for food in foods:
    print(f"{food} is a good food")

# Exercise 3
# Using a for loop, print just the last two food strings from foods.
for food in foods[-2:]:
    print(food)

# Exercise 4
# Create a dictionary named home_town containing the keys of city, state and population.
# Print a string with this format:
# “I was born in city, state - population of population”

home_town = {
    "city": "New York",
    "state": "New York",
    "population": 8000000
}

print(f"I was born in {home_town['city']}, {home_town['state']} - population of {home_town['population']}")

# Exercise 5
# Iterate over the key: value pairs in home_town and print a string for each item.
for key, value in home_town.items():
    print(f"{key} = {value}")

# Exercise 6
# Create an empty list named cohort.
# Using a for loop to iterate over the students list.
# Within the for loop, add a dictionary to the cohort list that combines the student’s name
# and the food in the foods list at the same index.
cohort = []

for index, student in enumerate(students):
    cohort.append({'student': student, 'fav_food': foods[index]})

for item in cohort:
    print(item)

# Exercise 7
# Using the list of students and a list comprehension, assign to a variable named awesome_students
# a new list containing strings similar to this: ["Tina is awesome!", "Fred is awesome!", "Wilma is awesome!"]
# Iterate over the awesome_students list, printing out each string.

awesome_students = [f"{student} is awesome!" for student in students]

for student in awesome_students:
    print(student)

# Exercise 8
# Use a for loop to iterate over a list comprehension that filters the foods tuple to only include food strings that contains the letter 'a'.
# Within the for loop, print each food string.
for food in [food for food in foods if 'a' in food.lower()]:
    print(food)
