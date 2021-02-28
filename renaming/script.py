from lecturers import lecturers
import os

for year in lecturers:
    for i in range(len(year[1])):
        # first round
        # stem = f"/Users/smog/programFiles/html/pact-website/public/img/instructors/{year[0][-4:]}/"
        # os.rename(f"{stem}{i}" , f"{stem}{year[1][i][0][0]}")
        stem = f"/Users/smog/programFiles/html/pact-website/public/img/instructors/"
        os.rename(f"{stem}{year[0][-4:]}/{year[1][i][0][0]}" , f"{stem}{year[1][i][0][0]}")
        print(f"{stem}{year[1][i][0][0]}")
        # print(i)
