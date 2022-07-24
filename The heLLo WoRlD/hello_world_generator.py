import os
import json


class HelloWorldGenerator:

    def __init__(self) -> None:
        self.language = ''
        self.dataset_path = os.path.abspath('./language_dict.json')
        self.generated_snippet = ''
        self.dataset = {}

    def loader(self):
        with open(self.dataset_path, 'r') as f:
            data = json.load(f)
            self.dataset = data['languages']
            # print(self.dataset)

    def generate(self, language='python'):
        self.loader()
        self.language = language
        self.generated_snippet = self.dataset[self.language]
        self.generated_snippet = self.generated_snippet['syntax']
        print(self.generated_snippet)


if __name__ == '__main__':
    HelloWorldGenerator().generate()
