
import json
from urllib.request import Request, urlopen
from urllib.error import HTTPError

url = "http://127.0.0.1:5000/predict"

data = {
    "cleanliness_score": 15,
    "odor_score": 8,
    "waste_level": 9,
    "complaints": 7,
    "footfall": 250,
    "hours_since_cleaning": 18
}

request = Request(
    url,
    data=json.dumps(data).encode("utf-8"),
    headers={"Content-Type": "application/json"},
    method="POST"
)

try:
    with urlopen(request) as response:
        print("Status:", response.status)
        print(response.read().decode("utf-8"))
except HTTPError as error:
    print("HTTP Status:", error.code)
    print("Error Response:")
    print(error.read().decode("utf-8"))
