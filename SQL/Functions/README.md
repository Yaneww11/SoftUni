# Lab: Built-in Functions

This document defines the lab exercise assignments for the PostgreSQL course @ Software University. Submit your solutions to the SoftUni Judge System.

## Setup

1. Create a database `book_library` and open its query tool.
2. Download the file `book_library.sql` from the course instance, import it into your database’s query tab, and execute the queries. Get familiar with the `book_library` tables. You will use them in the following exercises.

## Exercises

### 1. Find Book Titles
Write a query to find all books whose titles start with "The". Order the result by `id`. Submit your query statements.

**Example Output:**
| title                           |
|---------------------------------|
| The Mysterious Affair at Styles |
| The Big Four                    |
| The Murder at the Vicarage      |
| The Mystery of the Blue Train   |
| The Ring                        |
| …                               |

### 2. Replace Titles
Write a query to find all books whose titles start with "The" and replace the substring with 3 asterisks. Retrieve data about the updated titles. Order the result by `id`. Submit your query statements.

**Example Output:**
