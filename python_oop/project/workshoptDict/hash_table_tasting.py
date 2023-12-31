import unittest

from workshoptDict.hash_table import HashTable


class TestHashTable(unittest.TestCase):
    def setUp(self):
        self.hash_table = HashTable(100)
        self.hash_table["hello"] = "Hello World"
        self.hash_table[98.6] = 37
        self.hash_table[False] = True

    def test_create_hash_table(self):
        self.assertIsNotNone(HashTable(10))

    def test_report_capacity(self):
        self.assertEqual(3, len(self.hash_table.array))

    def test_create_empty_pair_slots(self):
        hash_table = HashTable(4)
        expected = [None] * 4

        actual = hash_table._array
        self.assertEqual(expected, actual)

    def test_insert(self):
        hash_table = HashTable(4)
        hash_table["hello"] = "Hello World"

        self.assertIn(('hello', 'Hello World'), hash_table.array)

    def test_find_value_by_key(self):
        self.assertEqual("Hello World", self.hash_table["hello"])
        self.assertEqual(37, self.hash_table[98.6])
        self.assertEqual(True, self.hash_table[False])

    def test_string_representation(self):
        actual = str(self.hash_table)
        expected = "{False: True,98.6: 37,'hello': 'Hello World'}"
        self.assertEqual(expected, actual)

    def test_delete_item(self):
        del self.hash_table['hello']
        self.assertNotIn("hello", self.hash_table)


if __name__ == '__main__':
    unittest.main()
