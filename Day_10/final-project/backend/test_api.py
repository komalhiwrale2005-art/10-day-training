
import json
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

url = "http://127.0.0.1:5000/predict"

data = {
    "cleanliness_score": 3,
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
        result = json.loads(response.read().decode("utf-8"))
        print("API Response:")
        print(json.dumps(result, indent=4))
except HTTPError as error:
    print("HTTP Error:", error.code)
    print(error.read().decode("utf-8"))
except URLError as error:
    print("Connection Error:", error.reason)
