from random import randint;
with open("students.txt","r") as students:
    names=[line.strip() for line in students.readlines()];
group=[];
groupno=2;
while len(names):
    index = randint(0, len(names) - 1);
    group.append(names.pop(index));
    if len(group) == 2:
        print (f"group {groupno}: {group[0]} - {group[1]}");
        group=[];
        groupno+=1;
