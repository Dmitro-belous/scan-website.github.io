export default class ObjectsService {

  static async objectsInfo(
    url, 
    inn,
    tonality,
    limit,
    startDate,
    endDate,
    maxFullness,
    inBusinessNews,
    onlyMainRole,
    onlyWithRiskFactors,
    techNews,
    announcements,
    digests) {
          let revTechNews = !techNews;
          let revAnnouncements = !announcements;
          let revDigests = !digests;

          let responce = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`               
            },
            body: JSON.stringify({
                    "issueDateInterval": {
                      "startDate": startDate,
                      "endDate": endDate
                    },
                    "searchContext": {
                      "targetSearchEntitiesContext": {
                        "targetSearchEntities": [
                          {
                            "type": "company",
                            "sparkId": null,
                            "entityId": null,
                            "inn": inn,
                            "maxFullness": maxFullness,
                            "inBusinessNews": inBusinessNews
                          }
                        ],
                        "onlyMainRole": onlyMainRole,
                        "tonality": tonality,
                        "onlyWithRiskFactors": onlyWithRiskFactors,
                        "riskFactors": {
                          "and": [],
                          "or": [],
                          "not": []
                        },
                        "themes": {
                          "and": [],
                          "or": [],
                          "not": []
                        }
                      },
                      "themesFilter": {
                        "and": [],
                        "or": [],
                        "not": []
                      }
                    },
                    "searchArea": {
                      "includedSources": [],
                      "excludedSources": [],
                      "includedSourceGroups": [],
                      "excludedSourceGroups": []
                    },
                    "attributeFilters": {
                      "excludeTechNews": revTechNews,
                      "excludeAnnouncements": revAnnouncements,
                      "excludeDigests": revDigests
                    },
                    "similarMode": "duplicates",
                    "limit": limit,
                    "sortType": "sourceInfluence",
                    "sortDirectionType": "desc",
                    "intervalType": "month",
                    "histogramTypes": [
                      "totalDocuments",
                      "riskFactors"
                    ]
            })
        })        

        return responce.json();
    }
}