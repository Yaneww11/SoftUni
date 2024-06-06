# Gringotts Database Management

Mr. Bodrog is a small and greedy goblin who serves as the supervisor of Gringotts, the biggest bank in the wizarding community. His most prized possession is a database that contains information about deposits made in the wizarding world, and his pastime is to extort money from others. Despite his eagerness to obtain your money, you do not possess any magical abilities. Instead, you have expertise in database management, which allows you to access this valuable data.

Mr. Bodrog insists that you provide him with daily reports, threatening to send a pack of starving werewolves after you if you fail to comply. To avoid these dangerous creatures, it is recommended to create a database named `gringotts_db` and open its query tool. Download the `04-Exercises-Data-Aggregation-gringotts_db.sql` file from the course instance, import it into the query tab of your database, and execute the queries provided in the file. Take some time to familiarize yourself with the tables in the `gringotts_db` database, as they will be used in the exercises that follow.

## Tasks

### 1. COUNT of Records
Determine the exact number of records contained within the database.

| count |
|-------|
| 162   |

### 2. Total Deposit Amount
Compose a SQL query that calculates the total sum of the deposit amount held at Gringotts Bank.

| total_amount |
|--------------|
| 3870365.28   |

### 3. AVG Magic Wand Size
Compute the average size of "magic_wand_size" that belongs to wizards and round the result to the third decimal place.

| average_magic_wand_size |
|-------------------------|
| 21.037                  |

### 4. MIN Deposit Charge
Determine the smallest amount of "deposit_charge".

| minimum_deposit_charge |
|------------------------|
| 1.00                   |

### 5. MAX Age
Determine the maximum "age" among the wizards in the database.

| maximum_age |
|-------------|
| 73          |

### 6. GROUP BY Deposit Interest
Order the "deposit_group" based on the total amount of "deposit_interest" in each group, and sort the results in descending order by the total interest in each group.

| deposit_group  | deposit_interest |
|----------------|------------------|
| Troll Chest    | 685.35           |
| Human Pride    | 676.97           |
| Blue Phoenix   | 669.01           |
| Venomous Tongue| 574.64           |

### 7. LIMIT the Magic Wand Creator
Retrieve the "magic_wand_creator" with the smallest "magic_wand_size" from the "wizard_deposits" table. The query should group the results by "magic_wand_creator" and display the "minimum_wand_size" for each creator. The results should be sorted in ascending order by the minimum wand size and limited to the top five smallest wand sizes.

| magic_wand_creator  | minimum_wand_size |
|---------------------|-------------------|
| Mykew Gregorovitch  | 10                |
| Ollivander family   | 10                |
| Death               | 11                |
| ...                 | ...               |
| Jimmy Kiddell       | 12                |

### 8. Bank Profitability
Mr. Bodrog is interested in the profitability of the bank and wants to know the average interest rates of all "deposit_groups" rounded down to the nearest integer. The query should categorize the deposits based on whether they have expired or not and retrieve data only for deposits that have a "deposit_start_date" after '1985-01-01'. The results should be sorted in descending order by "deposit_group" and ascending order by the "is_deposit_expired" flag.

| deposit_group   | is_deposit_expired | deposit_interest |
|-----------------|--------------------|------------------|
| Venomous Tongue | 0                  | 16               |
| Venomous Tongue | 1                  | 13               |
| Troll Chest     | 0                  | 21               |
| ...             | ...                | ...              |
| Human Pride     | 1                  | 13               |
| ...             | ...                | ...              |
| Blue Phoenix    | 1                  | 21               |

### 9. Notes with Dumbledore
Generate a SQL query to retrieve the "last_name" of each wizard and the number of "notes" they wrote that contains the word "Dumbledore" in the "wizard_deposits" table.

| last_name       | notes_with_dumbledore |
|-----------------|-----------------------|
| Grindelwald     | 1                     |
| Brown           | 1                     |
| Lovegood        | 1                     |
| ...             | ...                   |
| Creevey         | 2                     |
| ...             | ...                   |
| Weasley         | 4                     |
| ...             | ...                   |
| Dumbledore      | 1                     |

### 10. Wizard View
Create a view in SQL named `view_wizard_deposits_with_expiration_date_before_1983_08_17` that fetches data from the "wizard_deposits" table. The view should display the full name of the wizard, concatenated from their "first_name" and "last_name", along with the "deposit_start_date", "deposit_expiration_date", and "deposit_amount". The view's results should be grouped by the "wizard_name", "start_date", "expiration_date", and "amount". Additionally, the view should only include deposits that have an expiration date before or on '1983-08-17', and should be ordered by the "expiration_date" in ascending order.

| wizard_name             | start_date | expiration_date | amount   |
|-------------------------|------------|-----------------|----------|
| Alicia Spinnet          | 1980-02-06 | 1980-03-04      | 6269.39  |
| Anthony Goldstein       | 1980-05-11 | 1980-05-22      | 5264.16  |
| Wilhelmina Grubbly-Plank| 1980-08-19 | 1980-08-21      | 21263.21 |
| Hermione Granger        | 1980-11-17 | 1981-01-13      | 20232.87 |
| ...                     | ...        | ...             | ...      |
| Marvolo Gaunt           | 1981-04-12 | 1981-09-20      | 22895.49 |
| ...                     | ...        | ...             | ...      |
| Remus Lupin             | 1982-05-08 | 1982-06-04      | 17821.66 |
| ...                     | ...        | ...             | ...      |
| Hepzibah Smith          | 1983-05-25 | 1983-08-17      | 33665.13 |

### 11. Filter Max Deposit
Create a SQL query that retrieves the name of the "magic_wand_creator" and their maximum "deposit_amount" from the "wizard_deposits" table. The results should be grouped by the "magic_wand_creator" and filtered to only include those with a maximum "deposit_amount" that falls outside the range of 20000 to 40000. Order the results by "max_deposit_amount" in descending order, and limit the results to 3 records.

| magic_wand_creator | max_deposit_amount |
|--------------------|--------------------|
| Ollivander family  | 49964.03           |
| Arturo Cephalopos  | 49767.47           |
| Jimmy Kiddell      | 49041.09           |

### 12. Age Group
Create a SQL query that groups the wizards from the "wizard_deposits" table into age groups of '[0-10]', '[11-20]', '[21-30]', '[31-40]', '[41-50]', '[51-60]', and '[61+]'. The query should count the number of wizards in each "age_group" and display the results in ascending order based on the "age_group".

| age_group | count |
|-----------|-------|
| [11-20]   | 21    |
| [21-30]   | 32    |
| [31-40]   | 28    |
| [41-50]   | 24    |
| [51-60]   | 26    |
| [61+]     | 31    |

## Congratulations!
Your effective management of the Gringotts database has earned you an invitation to become an analyst at SoftUni. To prepare for this role, you'll be working with a familiar database, which has been modified for these tasks. Start by creating a fresh database named `data_aggregation_softuni_management_db`. Once done, retrieve the `04-Exercises-Data-Aggregation-softuni_management_db.sql` file from the course instance, import it into your database's query tab, and execute the queries in the file. Take your time to familiarize yourself with the tables in the `data_aggregation_softuni_management_db` as they will be utilized in the upcoming exercises. This way, you'll be ready to tackle the tasks effectively and showcase your analytical skills.

### 13. SUM the Employees
Your first task as an analyst at SoftUni is to write an SQL query that calculates the total number of employees in each department. The "department_id" is stored in the "employees" table, and the following IDs are used to identify each department:

| Department              | Count |
|-------------------------|-------|
| Engineering             | 4     |
| Tool Design             | 2     |
| Sales                   | 0     |
| Marketing               | 4     |
| Purchasing              | 3     |
| Research and Development| 3     |
| Production              | 137   |
