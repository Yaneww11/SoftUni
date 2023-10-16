ROWS = 6
COLUM = 7

directio_mapper = [
    (-1, 0),  # Up
    (1, 0),  # Down
    (0, -1),  # Left
    (0, 1),  # Right
    (-1, 1),  # Up right
    (1, -1),  # Down left
    (-1, -1),  # Up left
    (1, 1)  # Down right
]


def print_matrix(matrix):
    # Best way to print matrix
    print('\n'.join([' '.join(map(str, row)) for row in matrix]))
    """ Another way to print matrix
        output = ''
        for i in range(ROWS):
            for j in range(COLUM):
                output += f'{matrix[i][j]} '
            output += "\n"

        print(output)
        """


def is_valid_colum(selected_colum_number):
    return 0 <= selected_colum_number < COLUM


def is_valid_place(row, colum):
    if 0 <= colum < COLUM and 0 <= row < ROWS:
        return True
    return False


class FullColumError(Exception):
    pass


def place_player_number(colum_index, matrix, player_number):
    for row_index in range(ROWS - 1, -1, -1):
        if matrix[row_index][colum_index] == 0:
            matrix[row_index][colum_index] = player_number
            return [row_index, colum_index]
    else:
        raise FullColumError


def requested_directio_count(current_row, current_col, row_movement, col_movement, matrix, player_symbol):
    count_direction = 1
    for i in range(1, 4):
        row_index_to_check = current_row + row_movement * i
        colum_index_to_check = current_col + col_movement * i

        if not is_valid_place(row_index_to_check, colum_index_to_check):
            break

        if matrix[row_index_to_check][colum_index_to_check] != player_symbol:
            break

        count_direction += 1

    return count_direction


def opposite_directio_count(current_row, current_col, row_movement, col_movement, matrix, player_symbol):
    count_direction = 0
    for i in range(1, 4):
        row_index_to_check = current_row - row_movement * i
        colum_index_to_check = current_col - col_movement * i

        if not is_valid_place(row_index_to_check, colum_index_to_check):
            break

        if matrix[row_index_to_check][colum_index_to_check] != player_symbol:
            break

        count_direction += 1

    return count_direction


def is_winner(el_row, el_colum, matrix, player_symbol):
    for row_movement, col_movement in directio_mapper:
        count_direction = requested_directio_count(el_row, el_colum, row_movement, col_movement, matrix, player_symbol)
        count_opposite_direction = opposite_directio_count(el_row, el_colum, row_movement, col_movement, matrix,
                                                           player_symbol)

        if (count_direction + count_opposite_direction) >= 4:
            return True
    return False


matrix = [[0 for _ in range(COLUM)] for row in range(ROWS)]
print_matrix(matrix)

player = 1
while True:
    try:
        selected_colum = int(input(f"PLayer {player}, please choose a column: ")) - 1
        # -1 because we need the index of the colum
        if not is_valid_colum(selected_colum):
            raise ValueError
        current_row, current_col = place_player_number(selected_colum, matrix, player)
        if is_winner(current_row, current_col, matrix, player):
            print(f"Congratulations, player {player} win!!")
            break
        print_matrix(matrix)
    except ValueError:
        print(f"Player {player}, please select a number between 1 and {COLUM}")
        continue
    except FullColumError:
        print(f"Player {player}, please select another colum, that is full")
        continue

    player += 1
    player = 2 if player % 2 == 0 else 1
