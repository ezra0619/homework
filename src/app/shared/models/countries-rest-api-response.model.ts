export interface CountriesRestApiResponseModel {
    "name": {
      "common": String,
      "official": String,
      "nativeName": {
        "jpn": {
          "official": String,
          "common": String
        }
      }
    },
    "tld": [
        String
    ],
    "cca2": String,
    "ccn3": String,
    "cca3": String,
    "cioc": String,
    "independent": Boolean,
    "status": String,
    "unMember": Boolean,
    "currencies": {
      "JPY": {
        "name": String,
        "symbol": String
      }
    },
    "idd": {
      "root": String,
      "suffixes": [
        String
      ]
    },
    "capital": [
        String
    ],
    "altSpellings": [
        String
    ],
    "region": String,
    "subregion": String,
    "languages": {
      "jpn": String
    },
    "translations": {
      "ces": {
        "official": String,
        "common": String
      },
      "deu": {
        "official": String,
        "common": String
      },
      "est": {
        "official": String,
        "common": String
      },
      "fin": {
        "official": String,
        "common": String
      },
      "fra": {
        "official": String,
        "common": String
      },
      "hrv": {
        "official": String,
        "common": String
      },
      "hun": {
        "official": String,
        "common": String
      },
      "ita": {
        "official": String,
        "common": String
      },
      "jpn": {
        "official": String,
        "common": String
      },
      "kor": {
        "official": String,
        "common": String
      },
      "nld": {
        "official": String,
        "common": String
      },
      "per": {
        "official": String,
        "common": String
      },
      "pol": {
        "official": String,
        "common": String
      },
      "por": {
        "official": String,
        "common": String
      },
      "rus": {
        "official": String,
        "common": String
      },
      "slk": {
        "official": String,
        "common": String
      },
      "spa": {
        "official": String,
        "common": String
      },
      "swe": {
        "official": String,
        "common": String
      },
      "urd": {
        "official": String,
        "common": String
      },
      "zho": {
        "official": String,
        "common": String
      }
    },
    "latlng": [
      Number
    ],
    "landlocked": Boolean,
    "area": Number,
    "flag": String,
    "flags": {
      "svg": String,
      "png": String
    },
    "demonyms": {
      "eng": {
        "f": String,
        "m": String
      },
      "fra": {
        "f": String,
        "m": String
      }
    }
  }