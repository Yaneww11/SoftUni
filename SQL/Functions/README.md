# Lab: Built-in Functions

This document defines the lab exercise assignments for the PostgreSQL course @ Software University. Submit your solutions to the SoftUni Judge System.
![image](https://github.com/Yaneww11/SoftUni/assets/93374652/bc3ebca0-f3ff-4b3c-85db-0a8e213addc6)


## Exercises

### 1. River Info
Create a view named `view_river_info` that concatenates the `river_name`, `outflow`, and `length` columns from the `rivers` table in the following format:
'The river', ' ', `river_name`, ' ', 'flows into the', ' ', `outflow`, ' ', 'and is', ' ', `length`, ' ', 'kilometers long.'
The resulting column should be named "River Information", and the rows should be ordered by the `river_name` field in ascending alphabetical order.

Submit your query for this task in the Judge system.

**Example Output:**

| River Information                                                   |
|---------------------------------------------------------------------|
| The river Amazon flows into the Atlantic Ocean and is 6400 kilometers long. |
| The river Amur flows into the Sea of Okhotsk and is 4444 kilometers long.   |
| The river Brahmaputra flows into the Ganges and is 2948 kilometers long.    |
| The river Congo flows into the Atlantic Ocean and is 4700 kilometers long.  |
| The river Danube flows into the Black Sea and is 2888 kilometers long.      |
| …                                                                     |
| The river Yenisei flows into the Kara Sea and is 5539 kilometers long.      |
| The river Yukon flows into the Bering Sea and is 3185 kilometers long.      |

### 2. Concatenate Geography Data
Create a view named `view_continents_countries_currencies_details`. Follow these steps:
- From the `continents` table, combine the `continent_name` and `continent_code` with a colon (: ) separator, and name the resulting column "continent_details".
- From the `countries` table, select the `country_name`, `capital`, and `area_in_sq_km` fields. Add a hyphen ( - ) between the fields and append 'km2' to the end of `area_in_sq_km`. Name the resulting column "country_information".
- Combine the `description` and `currency_code` fields of the `currencies` table in the format: description (currency_code). Name the resulting column "currencies".
- Sort the result by the `country_information` and `currencies` fields in ascending alphabetical order.

Submit your query for this task in the Judge system.

**Example Output:**

| continent_details | country_information                 | currencies                       |
|-------------------|-------------------------------------|----------------------------------|
| Asia: AS          | Afghanistan - Kabul - 647500 - km2  | Afghanistan Afghani (AFN)        |
| Europe: EU        | Aland - Mariehamn - 1580 - km2      | Euro Member Countries (EUR)      |
| Europe: EU        | Albania - Tirana - 28748 - km2      | Albania Lek (ALL)                |
| …                 | …                                   | …                                |
| North America: NA | Bahamas - Nassau - 13940 - km2      | Bahamas Dollar (BSD)             |
| Asia: AS          | Bahrain - Manama - 665 - km2        | Bahrain Dinar (BHD)              |
| …                 | …                                   | …                                |
| Asia: AS          | Cambodia - Phnom Penh - 181040 - km2| Cambodia Riel (KHR)              |
| Africa: AF        | Cameroon - Yaoundé - 475440 - km2   | Communauté Financière Africaine (BEAC) CFA Franc BEAC (XAF) |
| …                 | …                                   | …                                |
| Africa: AF        | Democratic Republic of the Congo - Kinshasa - 2345410 - km2 | Congo/Kinshasa Franc (CDF) |
| …                 | …                                   | …                                |
| Africa: AF        | Zambia - Lusaka - 752614 - km2      | Zambia Kwacha (ZMW)              |
| Africa: AF        | Zimbabwe - Harare - 390580 - km2    | Zimbabwe Dollar (ZWD)            |

### 3. Capital Code
Add a new column to the `countries` table named `capital_code`, by generating the code using the `SUBSTRING()` function to extract the first 2 letters from the `capital` field.

Submit your query for this task in the Judge system.

**Example Output:**

| id  | capital          | capital_code |
|-----|------------------|--------------|
| 1   | Andorra la Vella | An           |
| 2   | Abu Dhabi        | Ab           |
| 3   | Kabul            | Ka           |
| 4   | St. John's       | St           |
| …   | …                | …            |
| 249 | Zambia           | Lu           |
| 250 | Zimbabwe         | Ha           |

### 4. (Descr)iption
Develop an SQL query that removes a portion of the `description` column from the `currencies` table. The query should extract the string starting from the 5th character and return the rest of the string.

Submit your query for this task in the Judge system.

**Example Output:**

| substring                   |
|-----------------------------|
| ed Arab Emirates Dirham     |
| anistan Afghani             |
| nia Lek                     |
| erlands Antilles Guilder    |
| …                           |
| ia Kwacha                   |
| abwe Dollar                 |

### 5. Substring River Length
Compose an SQL query to fetch the `river_length` from the `River Information` column within the `view_river_info` view. Ensure that only the numerical value is selected from the string, with a maximum of four digits, ranging from 0 to 9.

**Note**: Use the regex expression '([0-9]{1,4})' to find the number in the sentence.

Submit your query for this task in the Judge system.

**Example Output:**

| river_length |
|--------------|
| 6400         |
| 4444         |
| 2948         |
| 4700         |
| …            |
| 5539         |
| 3185         |

### 6. Replace A
Write a SQL query that replaces letters in the `mountain_range` column of the `mountains` table:
- Replace all occurrences of "a" with "@". Name the resulting column "replace_a".
- Replace all occurrences of "A" with "$". Name the resulting column "replace_A".

**Note**: The PostgreSQL `REPLACE()` function is case-sensitive.

Submit your query for this task in the Judge system.

**Example Output:**

| replace_a          | replace_A        |
|--------------------|------------------|
| Al@sk@ R@nge       | $laska Range     |
| Alborz             | $lborz           |
| Andes              | $ndes            |
| B@lk@n Mount@ins   | Balkan Mountains |
| C@uc@sus           | Caucasus         |
| …                  | …                |
| J@y@wij@y@ Mount@ins | Jayawijaya Mountains |
| …                  | …                |
| Str@ndz@           | Strandza         |
| Monte Ros@         | Monte Rosa       |

### 7. Translate
Use the `TRANSLATE()` function to convert the non-English characters 'áãåçéíñóú' in the `capital` column of the `countries` table to their corresponding English letters. Name the resulting column "translated_name".

Submit your query for this task in the Judge system.

**Example Output:**

| capital          | translated_name |
|------------------|------------------|
| Baghdad          | Baghdad          |
| Andorra la Vella | Andorra la Vella |
| Abu Dhabi        | Abu Dhabi        |
| …                | …                |
| Yaoundé          | Yaounde          |
| Beijing          | Beijing          |
| Bogotá           | Bogota           |
| San José         | San Jose         |
| …                | …                |
| El Aaiún         | El Aaiun         |
| …                | …                |
| Hagåtña          | Hagatna          |
| …                | …                |
| São Tomé         | Sao Tome         |
| …                | …                |
| Lomé             | Lome             |
| …                | …                |
| Lusaka           | Lusaka           |
| Harare           | Harare           |

### 8. LEADING
Use the `TRIM()` function with the appropriate flag to remove leading spaces from the `continent_name` values in the `continents` table.

Submit your query for this task in the Judge system.

**Example Output:**

| continent_name   | trim           |
|------------------|----------------|
| '····Africa'     | 'Africa'       |
| …                | …              |
| '····Asia'       | 'Asia'         |
| …                | …              |
| '····North America' | 'North America' |
| …                | …              |
| '····South America' | 'South America' |

### 9. TRAILING
Use the `TRIM()` function with the appropriate flag to remove trailing spaces from the `continent_name` values in the `continents` table.

Submit your query for this task in the Judge system.

**Example Output:**

| continent_name   | trim         |
|------------------|--------------|
| …                | …            |
| 'Antarctica····' | 'Antarctica' |
| …                | …            |
| 'Europe····'     | 'Europe'     |
| …                | …            |
| 'Oceania····'    | 'Oceania'    |

### 10. LTRIM & RTRIM
Use the `TRIM()` function to remove the "m" character as follows:
- Remove the 'M' character from the left side of the `peak_name` column within the `peaks` table, and assign the name "left_trim" to the resulting new column.
- Remove the 'm' character from the right side of the `peak_name` column within the `peaks` table, and assign the name "right_trim" to the resulting new column.

**Note**: The PostgreSQL `TRIM()` function and its equivalent functions are case-sensitive.

Submit your query for this task in the Judge system.

**Example Output:**

| left_trim       | right_trim     |
|-----------------|----------------|
| Aconcagua       | Aconcagua      |
| Botev           | Botev          |
| Carstensz Pyramid | Carstensz Pyramid |
| …               | …              |
| onte Pissis     | Monte Pissis   |
| ount Giluwe     | Mount Giluwe   |
| ount Kenya      | Mount Kenya    |
| …               | …              |
| akalu           | Makalu         |
| Kom             | Ko             |

### 11. Character Length and Bits
Combine the `mountain_range` column from the `mountains` table and the `peak_name` column from the `peaks` table into a single field called `mountain_information`. Find the number of characters in the newly created text field and name the new column `characters_length`. Additionally, express the length in bits and name the column `bits_of_a_tring`.

Submit your query for this task in the Judge system.

**Example Output:**

| mountain_information    | characters_length | bits_of_a_tring |
|-------------------------|-------------------|-----------------|
| Andes Aconcagua         | 15                | 120             |
| Balkan Mountains Botev  | 22                | 176             |
| The Sudirman Range Carstensz Pyramid | 36                | 288             |
| Alborz Damavand         | 15                | 120             |
| …                       | …                 | …               |
| Balkan Mountains Vezhen | 23                | 184             |
| Balkan Mountains Kom    | 20                | 160             |

### 12. Length of a Number
Measure the length of the `population` numbers in the `countries` table. Use the `CAST()` function to convert the number into a string and then use the `LENGTH()` function.

Submit your query for this task in the Judge system.

**Example Output:**

| population | length |
|------------|--------|
| 29671605   | 8      |
| 84000      | 5      |
| 4975593    | 7      |
| 29121286   | 8      |
| …          | …      |
| 13460305   | 8      |
| 11651858   | 8      |

### 13. Positive and Negative LEFT
Write a SQL query to select the FIRST 4 characters from the `peak_name` column and name the new column `positive_left`. Also, select all characters except the LAST 4 from the `peak_name` column and name the new column `negative_left`.

Submit your query for this task in the Judge system.

**Example Output:**

| peak_name       | positive_left | negative_left    |
|-----------------|----------------|------------------|
| Aconcagua       | Acon           | Aconc            |
| Botev           | Bote           | B                |
| Carstensz Pyramid | Cars         | Carstensz Pyr    |
| Damavand        | Dama           | Dama             |
| Dykh-Tau        | Dykh           | Dykh             |
| Elbrus          | Elbr           | El               |
| …               | …              | …                |
| Vezhen          | Vezh           | Ve               |
| Kom             | Kom            |                  |

### 14. Positive and Negative RIGHT
Write a SQL query to select the LAST 4 characters from the `peak_name` column and name the new column `positive_right`. Also, select all characters except the FIRST 4 from the `peak_name` column and name the new column `negative_right`.

Submit your query for this task in the Judge system.

**Example Output:**

| peak_name       | positive_right | negative_right     |
|-----------------|----------------|--------------------|
| Aconcagua       | agua           | cagua              |
| Botev           | otev           | v                  |
| Carstensz Pyramid | amid         | tensz Pyramid      |
| Damavand        | vand           | vand               |
| Dykh-Tau        | -Tau           | -Tau               |
| Elbrus          | brus           | us                 |
| …               | …              | …                  |
| Vezhen          | zhen           | en                 |
| Kom             | Kom            |                    |

### 15. Update iso_code
Update the `iso_code` column in the `countries` table. For null values, update them by taking the first three characters from the `country_name` column and converting them to uppercase.

Submit your query for this task in the Judge system.

**Example Output:**

| id  | iso_code |
|-----|----------|
| 1   | AND      |
| 2   | ARE      |
| 3   | AFG      |
| 4   | ATG      |
| 5   | AIA      |
| 6   | ALB      |
| 7   | ARM      |
| …   | …        |
| 249 | ZMB      |
| 250 | ZWE      |

# Booking Database Exercises

To complete the upcoming exercises, it is necessary to create a new database named `booking_db` and open its query tool. Download the `03-Exercises-Built-in-Functions-booking_db.sql` file from the course instance and import it into the query tab of your database. After importing, execute the queries in the file. Use the schema and tables available in the `booking_db` database for the tasks that follow.

## Exercise List

### 18. Arithmetical Operators
Apply mathematical operators in SQL. Create a fresh table named `bookings_calculation` by selecting the `booked_for` values from the `bookings` table where the `apartment_id` equals 93. The `booked_for` column signifies the number of nights the apartment is booked.

Next, alter the table by adding two new columns:
- `multiplication` column with a NUMERIC data type
- `modulo` column, also of NUMERIC data type

Calculate the earnings earned by the owner for each night:
- Populate the `multiplication` column by multiplying the `booked_for` values by 50
- Fill the `modulo` column with values representing the remainder when `booked_for` is divided by 50

Submit your query for this task in the Judge system.

Example:

| booked_for | multiplication | modulo |
|------------|----------------|--------|
| 9          | 450            | 9      |
| 3          | 150            | 3      |
| 9          | 450            | 9      |
| 10         | 500            | 10     |
| 1          | 50             | 1      |
| 9          | 450            | 9      |

### 19. ROUND vs TRUNC
Create a SQL query that retrieves the `latitude` column from the `apartments` table. Apply the `ROUND()` function to it with a precision of 2 decimal places, and then apply the `TRUNC()` function with the same precision. Compare and measure the differences in the output produced by the two functions.

Submit your query for this task in the Judge system.

Example:

| latitude  | round | trunc |
|-----------|-------|-------|
| 38.1941   | 38.19 | 38.19 |
| 5.9271    | 5.93  | 5.92  |
| -10.6776  | -10.68| -10.67|
| 82.1055   | 82.11 | 82.10 |
| -32.5269  | -32.53| -32.52|
| …         | …     | …     |
| 41.7393   | 41.74 | 41.73 |
| -67.5961  | -67.60| -67.59|

### 20. Absolute Value
Write an SQL query to select the `longitude` column from the `apartments` table and apply the `ABS()` function to it to find its absolute value.

Submit your query for this task in the Judge system.

Example:

| longitude | abs      |
|-----------|----------|
| 58.3150   | 58.3150  |
| -95.1855  | 95.1855  |
| -105.1542 | 105.1542 |
| -142.8697 | 142.8697 |
| 45.3129   | 45.3129  |
| …         | …        |
| -57.1891  | 57.1891  |
| -96.6056  | 96.6056  |

### 21. Billing Day
To generate payment documents for reservations made for apartments, follow these steps:
- Add a new column to the `bookings` table called `billing_day` with the data type of `TIMESTAMPTZ` and set its default value to `CURRENT_TIMESTAMP`
- Create a SQL query that retrieves the `billing_day` column from the `bookings` table and formats it as `DD 'Day' MM 'Month' YYYY 'Year' HH24:MI:SS`, naming the resulting column `Billing Day`.

Example:

| …                     | billing_day                  | Billing Day                         |
|-----------------------|------------------------------|-------------------------------------|
| 2023-07-17 23:15:59.3749+03 | 2023-07-17 23:15:59.3749+03 | 17 Day 07 Month 2023 Year 23:15:59  |
| 2023-07-17 23:15:59.3749+03 | 2023-07-17 23:15:59.3749+03 | 17 Day 07 Month 2023 Year 23:15:59  |
| …                     | …                            | …                                   |

### 22. EXTRACT Booked At
Create a SQL query to retrieve the YEAR, MONTH, DAY, HOUR, MINUTE, and SECOND values from the `booked_at` column. Use the `CEILING()` function to round up the SECOND value to the nearest whole number. Use the `AT TIME ZONE` function to convert the timestamp to the UTC time zone before extracting the hour for consistency.

Submit your query for this task in the Judge system.

Example:

| YEAR | MONTH | DAY | HOUR | MINUTE | SECOND |
|------|-------|-----|------|--------|--------|
| 2021 | 10    | 16  | 8    | 8      | 60     |
| 2022 | 10    | 17  | 12   | 31     | 6      |
| 2023 | 10    | 15  | 0    | 16     | 45     |
| 2021 | 1     | 10  | 3    | 25     | 38     |
| 2020 | 5     | 17  | 20   | 1      | 3      |
| …    | …     | …   | …    | …      | …      |
| 2021 | 1     | 18  | 11   | 58     | 37     |
| 2021 | 4     | 18  | 12   | 50     | 35     |

### 23. Early Birds
Compose a SQL query to determine the `user_id` of customers who prefer booking 10 months in advance by computing the time difference between the `starts_at` and `booked_at` columns in the `bookings` table. Store the resultant values in a new column named `Early Birds`. Apply a filter to select rows where the `early_birds` value is greater than or equal to 10 months, and retrieve the corresponding `user_id`.

Example:

| user_id | early_birds                     |
|---------|---------------------------------|
| 63      | 10 mons 8 days 19:30:20.531     |
| 53      | 10 mons 1 day 00:35:07.551      |
| 18      | 10 mons 12:26:33.623            |
| 22      | 10 mons 03:34:53.748            |
| …       | …                               |
| 7       | 10 mons 1 day 03:56:17.546      |
| 18      | 10 mons 12:26:33.623            |

### 24. Match or Not
Retrieve the `companion_full_name` and `email` columns from the `users` table where:
- The `companion_full_name` column contains the substring `%aNd%` in a case-insensitive manner
- The `email` column does NOT contain the substring `%@gmail` in a case-sensitive manner

Submit your query for this task in the Judge system.

Example:

| companion_full_name   | email                      |
|-----------------------|----------------------------|
| Ms. Brandy Rice       | Rosalind_Hudson@hotmail.com|
| Terrell Blanda IV     | Macie87@hotmail.com        |
| Andrew Gottlieb PhD   | Alfred.Purdy2@gmail.com    |
| Sandra Langosh        | Thalia_Wehner78@gmail.com  |

### 25. COUNT by Initial
Generate a report displaying the user count grouped by their initials. Select the initial two characters from the `first_name` column of the `users` table and store them in a new column named `initials`. Use the `GROUP BY` clause to group users by their initials and the `COUNT()` function to retrieve the number of users in each group. Name the resulting column `user_count`. Arrange the resulting data in descending order according to the `user_count` column. For multiple groups with the same count, sort them alphabetically based on their `initials`.

Submit your query for this task in the Judge system.

Example:

| initials | user_count |
|----------|------------|
| Ar       | 7          |
| Ma       | 7          |
| Ja       | 5          |
| El       | 4          |
| …        | …          |
| Ab       | 3          |
| …        | …          |
| Vl       | 1          |
| Wi       | 1          |

### 26. SUM
Calculate the total value of bookings for the apartment by retrieving the `booked_for` column from the `bookings` table and applying the `SUM()` function to it. Add a filter to select only the rows where the `apartment_id` is equal to 90.

Submit your query for this task in the Judge system.

Example:

| total_value |
|-------------|
| 50          |

### 27. Average Value
Create an SQL query that utilizes the `AVG()` function to calculate the average value of the `multiplication` column in the `bookings_calculation` table.

Submit your query for this task in the Judge system.

Example:

| average_value             |
|---------------------------|
| 341.6666666666666667      |

