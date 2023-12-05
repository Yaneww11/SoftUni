from project.teams.base_team import BaseTeam


class OutdoorTeam(BaseTeam):
    def win(self):
        self.advantage += 115
        self.wins += 1

    def __init__(self, name: str, country: str, advantage: int):
        super().__init__(name, country, advantage, 1000.0)
