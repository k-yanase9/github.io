import json 
import os
import datetime

with open("./public/tips_list.json", "r", encoding="utf-8") as f:
    jd = json.load(f)

for i in jd:
    lastmodify = os.path.getmtime(f"./public/{i['rootdir']}{i['mdfile']}")
    i["last_modify"] = datetime.datetime.fromtimestamp(lastmodify).strftime("%Y-%m-%d %H:%M:%S")

with open("./public/tips_list.json", "w", encoding="utf-8") as f:
    json.dump(jd, f, indent=4, ensure_ascii=False)