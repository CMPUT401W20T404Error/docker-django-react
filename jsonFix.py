import json

def main():
    start = False
    end = False
    fw = open("smolBoiV3", 'a')
    fw.write('{"tag": [')
    with open("smolBoiV2.0", 'r') as f:
        cont = f.read()
        item = ''
        for char in cont:
            if char == '{':
                start = True
            if start:
                item += char
            if char == '}':
                end = True
                item += ','
            if end and start:
                end = False
                start = False
                fw.write(item)
                item = ''
        fw.write("]}")


main()