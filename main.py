import face_recognition
import glob
import re
import operator
import sys

nameGot = "./" + sys.argv[1] + ".jpeg"
loaded_image = face_recognition.load_image_file(nameGot)
face_encoding = face_recognition.face_encodings(loaded_image)

def image_to_encodings(file):
    """Return the face encodings from an image"""
    load_image = face_recognition.load_image_file(file)
    return face_recognition.face_encodings(load_image)[0]

distance = face_recognition.face_distance(face_encoding, image_to_encodings("./users/w1.jpeg"))

users = glob.glob('users/*.jpeg')


usersPhotoName = [re.sub('users/|.jpeg', '', image)
                            for image in users]

usersEncoding = [image_to_encodings(image)
                            for image in users]

usersDictionary = {name: encoding for name, encoding 
                    in zip(usersPhotoName, usersEncoding)}

arr = []
for name in usersPhotoName:
    encode = usersDictionary[name]
    usersDictionary[name] = face_recognition.face_distance(face_encoding, encode)[0]


#最大値を出す
sorted_dic = sorted(usersDictionary.items(), key=operator.itemgetter(1))

top3 = {"first": sorted_dic[0][0],
        "second": sorted_dic[1][0],
        "third": sorted_dic[2][0]}
print(top3)

