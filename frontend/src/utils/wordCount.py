import json

def main():
    
    with open("smolBoiV3", 'r') as f:
        subs = {}
        data = json.load(f)["tag"]
        
        for key in data:
            for _, val in key.items():
                lsVal = val.split(" ")
                for word in lsVal:
                    if word in subs:
                        subs[word] +=1
                    else:
                        subs[word] = 1


    f = open("countFile", 'w')

    f.write("{")
    for key, val in subs.items():
        f.write("{label : '"  + key + "'," "value: " + str(val) + "},\n")

    f.close()

main()
