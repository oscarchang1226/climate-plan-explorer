const cities = [
    {
        "name": "Benicia",
        "state": "CA",
        "id": "benicia_ca"
    },
    {
        "name": "Rohnert Park",
        "state": "CA",
        "id": "rohnert-park_ca"
    },
    {
        "name": "Sebastopol",
        "state": "CA",
        "id": "sebastopol_ca"
    },
    {
        "name": "Sonoma",
        "state": "CA",
        "id": "sonoma_ca"
    },
    {
        "name": "Los Gatos",
        "state": "CA",
        "id": "los-gatos_ca"
    },
    {
        "name": "Saratoga",
        "state": "CA",
        "id": "saratoga_ca"
    },
    {
        "name": "Cupertino",
        "state": "CA",
        "id": "cupertino_ca"
    },
    {
        "name": "Los Altos Hills",
        "state": "CA",
        "id": "los-altos-hills_ca"
    },
    {
        "name": "Palo Alto",
        "state": "CA",
        "id": "palo-alto_ca"
    },
    {
        "name": "San Jose",
        "state": "CA",
        "id": "san-jose_ca"
    },
    {
        "name": "Corte Madera",
        "state": "CA",
        "id": "corte-madera_ca"
    },
    {
        "name": "Ross",
        "state": "CA",
        "id": "ross_ca"
    },
    {
        "name": "San Anselmo",
        "state": "CA",
        "id": "san-anselmo_ca"
    },
    {
        "name": "Mill Valley",
        "state": "CA",
        "id": "mill-valley_ca"
    },
    {
        "name": "Tiburon",
        "state": "CA",
        "id": "tiburon_ca"
    },
    {
        "name": "Atherton",
        "state": "CA",
        "id": "atherton_ca"
    },
    {
        "name": "Brisbane",
        "state": "CA",
        "id": "brisbane_ca"
    },
    {
        "name": "Colma",
        "state": "CA",
        "id": "colma_ca"
    },
    {
        "name": "East Palo Alto",
        "state": "CA",
        "id": "east-palo-alto_ca"
    },
    {
        "name": "Foster City",
        "state": "CA",
        "id": "foster-city_ca"
    },
    {
        "name": "Hillsborough",
        "state": "CA",
        "id": "hillsborough_ca"
    },
    {
        "name": "Millbrae",
        "state": "CA",
        "id": "millbrae_ca"
    },
    {
        "name": "Pacifica",
        "state": "CA",
        "id": "pacifica_ca"
    },
    {
        "name": "Belvedere",
        "state": "CA",
        "id": "belvedere_ca"
    },
    {
        "name": "Hughson",
        "state": "CA",
        "id": "hughson_ca"
    },
    {
        "name": "San Francisco",
        "state": "CA",
        "id": "san-francisco_ca"
    },
    {
        "name": "Oakdale",
        "state": "CA",
        "id": "oakdale_ca"
    },
    {
        "name": "Menlo Park",
        "state": "CA",
        "id": "menlo-park_ca"
    },
    {
        "name": "San Mateo",
        "state": "CA",
        "id": "san-mateo_ca"
    },
    {
        "name": "Vallejo",
        "state": "CA",
        "id": "vallejo_ca"
    },
    {
        "name": "Sunnyvale",
        "state": "CA",
        "id": "sunnyvale_ca"
    },
    {
        "name": "Mountain View",
        "state": "CA",
        "id": "mountain-view_ca"
    },
    {
        "name": "Los Altos",
        "state": "CA",
        "id": "los-altos_ca"
    },
    {
        "name": "Santa Clara",
        "state": "CA",
        "id": "santa-clara_ca"
    },
    {
        "name": "Fairfax",
        "state": "CA",
        "id": "fairfax_ca"
    },
    {
        "name": "Larkspur",
        "state": "CA",
        "id": "larkspur_ca"
    },
    {
        "name": "Novato",
        "state": "CA",
        "id": "novato_ca"
    },
    {
        "name": "Oroville",
        "state": "CA",
        "id": "oroville_ca"
    },
    {
        "name": "Hayward",
        "state": "CA",
        "id": "hayward_ca"
    },
    {
        "name": "Livermore",
        "state": "CA",
        "id": "livermore_ca"
    },
    {
        "name": "Pleasanton",
        "state": "CA",
        "id": "pleasanton_ca"
    },
    {
        "name": "Belmont",
        "state": "CA",
        "id": "belmont_ca"
    },
    {
        "name": "Burlingame",
        "state": "CA",
        "id": "burlingame_ca"
    },
    {
        "name": "Daly City",
        "state": "CA",
        "id": "daly-city_ca"
    },
    {
        "name": "San Carlos",
        "state": "CA",
        "id": "san-carlos_ca"
    },
    {
        "name": "South San Francisco",
        "state": "CA",
        "id": "south-san-francisco_ca"
    },
    {
        "name": "Woodside",
        "state": "CA",
        "id": "woodside_ca"
    },
    {
        "name": "Rocklin",
        "state": "CA",
        "id": "rocklin_ca"
    },
    {
        "name": "Roseville",
        "state": "CA",
        "id": "roseville_ca"
    },
    {
        "name": "Piedmont",
        "state": "CA",
        "id": "piedmont_ca"
    },
    {
        "name": "Merced",
        "state": "CA",
        "id": "merced_ca"
    },
    {
        "name": "Santa Rosa",
        "state": "CA",
        "id": "santa-rosa_ca"
    },
    {
        "name": "El Cerrito",
        "state": "CA",
        "id": "el-cerrito_ca"
    },
    {
        "name": "Moraga",
        "state": "CA",
        "id": "moraga_ca"
    },
    {
        "name": "Lodi",
        "state": "CA",
        "id": "lodi_ca"
    },
    {
        "name": "Manteca",
        "state": "CA",
        "id": "manteca_ca"
    },
    {
        "name": "Tracy",
        "state": "CA",
        "id": "tracy_ca"
    },
    {
        "name": "South Lake Tahoe",
        "state": "CA",
        "id": "south-lake-tahoe_ca"
    },
    {
        "name": "Yuba City",
        "state": "CA",
        "id": "yuba-city_ca"
    },
    {
        "name": "Folsom",
        "state": "CA",
        "id": "folsom_ca"
    },
    {
        "name": "Calistoga",
        "state": "CA",
        "id": "calistoga_ca"
    },
    {
        "name": "Yountville",
        "state": "CA",
        "id": "yountville_ca"
    },
    {
        "name": "Antioch",
        "state": "CA",
        "id": "antioch_ca"
    },
    {
        "name": "Concord",
        "state": "CA",
        "id": "concord_ca"
    },
    {
        "name": "Danville",
        "state": "CA",
        "id": "danville_ca"
    },
    {
        "name": "Martinez",
        "state": "CA",
        "id": "martinez_ca"
    },
    {
        "name": "San Ramon",
        "state": "CA",
        "id": "san-ramon_ca"
    },
    {
        "name": "Walnut Creek",
        "state": "CA",
        "id": "walnut-creek_ca"
    },
    {
        "name": "Milpitas",
        "state": "CA",
        "id": "milpitas_ca"
    },
    {
        "name": "Citrus Heights",
        "state": "CA",
        "id": "citrus-heights_ca"
    },
    {
        "name": "Elk Grove",
        "state": "CA",
        "id": "elk-grove_ca"
    },
    {
        "name": "Galt",
        "state": "CA",
        "id": "galt_ca"
    },
    {
        "name": "Sacramento",
        "state": "CA",
        "id": "sacramento_ca"
    },
    {
        "name": "Oakley",
        "state": "CA",
        "id": "oakley_ca"
    },
    {
        "name": "Stockton",
        "state": "CA",
        "id": "stockton_ca"
    },
    {
        "name": "Redwood City",
        "state": "CA",
        "id": "redwood-city_ca"
    },
    {
        "name": "San Rafael",
        "state": "CA",
        "id": "san-rafael_ca"
    },
    {
        "name": "Davis",
        "state": "CA",
        "id": "davis_ca"
    },
    {
        "name": "Winters",
        "state": "CA",
        "id": "winters_ca"
    },
    {
        "name": "Woodland",
        "state": "CA",
        "id": "woodland_ca"
    },
    {
        "name": "Vacaville",
        "state": "CA",
        "id": "vacaville_ca"
    },
    {
        "name": "Oakland",
        "state": "CA",
        "id": "oakland_ca"
    },
    {
        "name": "Sausalito",
        "state": "CA",
        "id": "sausalito_ca"
    },
    {
        "name": "Richmond",
        "state": "CA",
        "id": "richmond_ca"
    },
    {
        "name": "San Pablo",
        "state": "CA",
        "id": "san-pablo_ca"
    },
    {
        "name": "Lafayette",
        "state": "CA",
        "id": "lafayette_ca"
    },
    {
        "name": "Fort Bragg",
        "state": "CA",
        "id": "fort-bragg_ca"
    },
    {
        "name": "Alameda",
        "state": "CA",
        "id": "alameda_ca"
    },
    {
        "name": "Berkeley",
        "state": "CA",
        "id": "berkeley_ca"
    },
    {
        "name": "Dublin",
        "state": "CA",
        "id": "dublin_ca"
    },
    {
        "name": "Emeryville",
        "state": "CA",
        "id": "emeryville_ca"
    },
    {
        "name": "Newark",
        "state": "CA",
        "id": "newark_ca"
    },
    {
        "name": "San Leandro",
        "state": "CA",
        "id": "san-leandro_ca"
    },
    {
        "name": "Union City",
        "state": "CA",
        "id": "union-city_ca"
    },
    {
        "name": "Fremont",
        "state": "CA",
        "id": "fremont_ca"
    },
    {
        "name": "St. Helena",
        "state": "CA",
        "id": "st.-helena_ca"
    },
    {
        "name": "Windsor",
        "state": "CA",
        "id": "windsor_ca"
    },
    {
        "name": "Albany",
        "state": "CA",
        "id": "albany_ca"
    },
    {
        "name": "Twentynine Palms",
        "state": "CA",
        "id": "twentynine-palms_ca"
    },
    {
        "name": "Cloverdale",
        "state": "CA",
        "id": "cloverdale_ca"
    }
]

const actionPlans = [
    {
        "name": "Benicia Climate Action Plan",
        "adoptionDate": "2009-09-01",
        "documentLink": "http://www.ca-ilg.org/sites/main/files/file-attachments/resources__finalcap.pdf",
        "pageLink": "http://www.ca-ilg.org/resource/city-benicia-climate-action-plan",
        "type": "CAP",
        "id": "benicia_ca_plan_1"
    },
    {
        "name": "Climate Action 2020",
        "adoptionDate": "2018-03-13",
        "documentLink": "",
        "pageLink": "http://rcpa.ca.gov/projects/climate-action-2020/",
        "type": "CAP",
        "id": "rohnert-park_ca_plan_1"
    },
    {
        "name": "Climate Action Framework",
        "adoptionDate": "2022-07-19",
        "documentLink": "https://www.ci.sebastopol.ca.us/Article/7-25-Sebastopol-Adopts-Climate-Guidance-Document",
        "pageLink": "https://ci.sebastopol.ca.us/SebastopolSite/media/Documents/Boards_Commissions_Committees/Sebastopol-Climate-Action-Framework_FINAL_07-21-22.pdf?ext=.pdf",
        "type": "CAP",
        "id": "sebastopol_ca_plan_1"
    },
    {
        "name": "Climate Action 2020",
        "adoptionDate": "2020-11-02",
        "documentLink": "https://www.sonomacity.org/documents/climate-emergency-resolution/",
        "pageLink": "http://rcpa.ca.gov/projects/climate-action-2020/",
        "type": "CAP",
        "id": "sonoma_ca_plan_1"
    },
    {
        "name": "Sustainability Plan",
        "adoptionDate": "2012-10-15",
        "documentLink": "https://www.losgatosca.gov/DocumentCenter/View/8162",
        "pageLink": "https://www.losgatosca.gov/1860/Sustainability-Plan",
        "type": "CAP",
        "id": "los-gatos_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2020-12-02",
        "documentLink": "https://www.saratoga.ca.us/DocumentCenter/View/2582/Saratoga-Climate-Action-Plan-2020",
        "pageLink": "https://www.saratoga.ca.us/488/Climate-Action-Plan#:~:text=The%20City%20Council%20adopted%20Saratoga's,below%201990%20%20by%202030.",
        "type": "CAP",
        "id": "saratoga_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2022-08-16",
        "documentLink": "https://www.cupertino.org/home/showpublisheddocument/31683/637964240923930000",
        "pageLink": "https://www.cupertino.org/our-city/departments/environment-sustainability/climate-action#:~:text=Cupertino's%20goal%20is%20to%20reduce,zero%20by%20the%20year%202040.",
        "type": "CAP",
        "id": "cupertino_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2021-10-21",
        "documentLink": "https://civicclerk.blob.core.windows.net/stream/LOSALTOSHILLSCA/7bf4e259-9a85-4839-9dfc-49dbe6ab9042.pdf?sv=2015-12-11&sr=b&sig=R%2FLANsKeCIC%2B18PaLJ5w7hs2RxV4QBgBtUPYAgoGFhA%3D&st=2023-02-02T03%3A08%3A26Z&se=2024-02-02T03%3A13%3A26Z&sp=r&rscc=no-cache&",
        "pageLink": "https://losaltoshillsca.civicclerk.com/web/Player.aspx?id=427&key=-1&mod=-1&mk=-1&nov=0",
        "type": "CAP",
        "id": "los-altos-hills_ca_plan_1"
    },
    {
        "name": "Sustainability and Climate Action Plan",
        "adoptionDate": "2016-11-01",
        "documentLink": "http://www.cityofpaloalto.org/civicax/filebank/documents/55892",
        "pageLink": "http://www.cityofpaloalto.org/services/sustainability/sustainability_and_climate_action_plan/default.asp",
        "type": "CAP",
        "id": "palo-alto_ca_plan_1"
    },
    {
        "name": "Climate Smart San Jose",
        "adoptionDate": "2018-02-27",
        "documentLink": "https://www.sanjoseca.gov/home/showpublisheddocument/32171/636705720690400000",
        "pageLink": "https://www.sanjoseca.gov/your-government/environment/climate-smart-san-jos",
        "type": "CAP",
        "id": "san-jose_ca_plan_1"
    },
    {
        "name": "2020 Climate Action Plan",
        "adoptionDate": "2020-12-01",
        "documentLink": "https://www.townofcortemadera.org/DocumentCenter/View/2556/Climate-Action-Plan-2020?bidId=#:~:text=Through%20the%20actions%20outlined%20in,reduced%20emissions%2C%20and%20an%20enhanced",
        "pageLink": "https://www.cityofconcord.org/305/Climate-Action-Progress",
        "type": "CAP",
        "id": "corte-madera_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2010-11-01",
        "documentLink": "http://www.townofross.org/sites/default/files/fileattachments/planning/page/242/ross_climate_action_plan.pdf",
        "pageLink": "http://www.townofross.org/planning/page/climate-action-plan",
        "type": "CAP",
        "id": "ross_ca_plan_1"
    },
    {
        "name": "Climate Action Plan: Town of San Anselmo",
        "adoptionDate": "2019-06-11",
        "documentLink": "https://www.townofsananselmo.org/DocumentCenter/View/24823/San-Anselmo-Climate-Action-Plan-2030-pdf?bidId=",
        "pageLink": "https://www.townofsananselmo.org/1303/Climate-Action-Plan-2030",
        "type": "CAP",
        "id": "san-anselmo_ca_plan_1"
    },
    {
        "name": "City of Mill Valley Climate Action Plan",
        "adoptionDate": "",
        "documentLink": "https://www.millvalleylibrary.org/DocumentCenter/View/3497/Draft-Climate-Action-Plan-for-public-review-8-8-22?bidId=",
        "pageLink": "https://www.millvalleylibrary.org/768/Climate-Action-Plan",
        "type": "CAP",
        "id": "mill-valley_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2022-09-21",
        "documentLink": "https://www.townoftiburon.org/DocumentCenter/View/917/Climate-Action-Plan-2022?bidId=",
        "pageLink": "https://www.townoftiburon.org/418/Climate-Action-Plan",
        "type": "CAP",
        "id": "tiburon_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2016-11-01",
        "documentLink": "http://www.ci.atherton.ca.us/DocumentCenter/View/3535",
        "pageLink": "http://www.ci.atherton.ca.us/index.aspx?NID=454",
        "type": "CAP",
        "id": "atherton_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2015-09-17",
        "documentLink": "https://www.brisbaneca.org/sites/default/files/fileattachments/public_works/page/6751/adopted_cap_9-17-15.pdf",
        "pageLink": "http://www.ci.brisbane.ca.us/news/2015-09-18/climate-action-plan-adopted",
        "type": "CAP",
        "id": "brisbane_ca_plan_1"
    },
    {
        "name": "2030 Climate Action Plan",
        "adoptionDate": "2020-10-28",
        "documentLink": "https://storage.googleapis.com/proudcity/colmaca/uploads/2020/10/d2e0c83c-draft-2030-climate-action-plan.pdf",
        "pageLink": "https://www.colma.ca.gov/meetings/regular-city-council-meeting-october-28-2020/",
        "type": "CAP",
        "id": "colma_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "",
        "documentLink": "https://www.cityofepa.org/sites/default/files/fileattachments/community_amp_economic_development/page/9041/12-20-11_final_east_palo_alto_climate_action_plan_201311071556140538.pdf",
        "pageLink": "https://www.cityofepa.org/econdev/page/climate-action-plan",
        "type": "CAP",
        "id": "east-palo-alto_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2015-02-01",
        "documentLink": "https://www.fostercity.org/sites/default/files/fileattachments/city_manager/page/2861/final-foster-city-cap_9-16-15.pdf",
        "pageLink": "https://www.fostercity.org/commdev/page/foster-citys-climate-action-plan-and-environmental-sustainability-best-practices",
        "type": "CAP",
        "id": "foster-city_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2010-02-01",
        "documentLink": "http://www.hillsborough.net/DocumentCenter/View/606",
        "pageLink": "http://www.hillsborough.net/297/Climate-Action-Plan",
        "type": "CAP",
        "id": "hillsborough_ca_plan_1"
    },
    {
        "name": "Final Climate Action Plan",
        "adoptionDate": "2020-10-27",
        "documentLink": "https://www.ci.millbrae.ca.us/home/showpublisheddocument/24105/637405337457930000",
        "pageLink": "https://www.ci.millbrae.ca.us/departments-services/public-works/climate-action-plan",
        "type": "CAP",
        "id": "millbrae_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2014-07-01",
        "documentLink": "https://web.archive.org/web/20150905235223/http://www.cityofpacifica.org/civica/filebank/blobdload.asp?BlobID=7490",
        "pageLink": "http://www.cityofpacifica.org/government/committees/climate_action_plan_task_force/default.asp",
        "type": "CAP",
        "id": "pacifica_ca_plan_1"
    },
    {
        "name": "Climate Action Plan 2030",
        "adoptionDate": "2022-06-13",
        "documentLink": "https://www.cityofbelvedere.org/DocumentCenter/View/8019/Belvedere-Climate-Action-Plan-2030?bidId=",
        "pageLink": "https://www.cityofbelvedere.org/DocumentCenter/View/8019/Belvedere-Climate-Action-Plan-2030?bidId=",
        "type": "CAP",
        "id": "belvedere_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2013-12-09",
        "documentLink": "http://www.stancounty.com/planning/pl/StanRST-Docs/Hughson/CLIMATE-ACTION-PLAN.pdf",
        "pageLink": "http://www.stancounty.com/planning/pl/toolbox.shtm",
        "type": "CAP",
        "id": "hughson_ca_plan_1"
    },
    {
        "name": "CLIMATE ACTION PLAN 2021",
        "adoptionDate": "2021-07-20",
        "documentLink": "https://sfenvironment.org/sites/default/files/cap_fulldocument_wappendix_web_220124.pdf",
        "pageLink": "https://sfenvironment.org/climateplan",
        "type": "CAP",
        "id": "san-francisco_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "",
        "documentLink": "",
        "pageLink": "",
        "type": "CAP",
        "id": "oakdale_ca_plan_1"
    },
    {
        "name": "City of Menlo Park Climate Change Action Plan",
        "adoptionDate": "2020-07-01",
        "documentLink": "https://beta.menlopark.org/files/sharedassets/public/city-managers-office/documents/sustainability/2030-climate-action-plan-amended-2021.pdf",
        "pageLink": "https://beta.menlopark.org/Government/Departments/City-Managers-Office/Sustainability/Climate-Action-Plan",
        "type": "CAP",
        "id": "menlo-park_ca_plan_1"
    },
    {
        "name": "2020 Climate Action Plan",
        "adoptionDate": "2020-04-01",
        "documentLink": "https://www.cityofsanmateo.org/DocumentCenter/View/80652/2020-Climate-Action-Plan?bidId=",
        "pageLink": "https://www.cityofsanmateo.org/2769/Climate-Action-Plan",
        "type": "CAP",
        "id": "san-mateo_ca_plan_1"
    },
    {
        "name": "City of Vallejo Climate Action Plan",
        "adoptionDate": "2012-03-01",
        "documentLink": "https://vallejoca.hosted.civiclive.com/common/pages/DisplayFile.aspx?itemId=17964927",
        "pageLink": "https://vallejoca.hosted.civiclive.com/our_city/departments_divisions/planning_development_services/planning_division/climate_action_plan",
        "type": "CAP",
        "id": "vallejo_ca_plan_1"
    },
    {
        "name": "Climate Action Playbook",
        "adoptionDate": "2019-08-01",
        "documentLink": "https://www.sunnyvale.ca.gov/home/showpublisheddocument/1320/637820055387770000",
        "pageLink": "https://sunnyvaleclimateaction.org/scoreboard",
        "type": "CAP",
        "id": "sunnyvale_ca_plan_1"
    },
    {
        "name": "Climate Protection Roadmap",
        "adoptionDate": "2015-09-01",
        "documentLink": "http://www.mountainview.gov/civicax/filebank/blobdload.aspx?BlobID=19516",
        "pageLink": "http://www.mountainview.gov/depts/comdev/sustain/climate_change/default.asp",
        "type": "CAP",
        "id": "mountain-view_ca_plan_1"
    },
    {
        "name": "Climate Action and Adaptation Plan",
        "adoptionDate": "2022-03-01",
        "documentLink": "https://www.losaltosca.gov/sites/default/files/fileattachments/community_development/page/59951/los_altos_caap_final_combined.pdf",
        "pageLink": "https://www.losaltosca.gov/communitydevelopment/page/climate-action-and-adaptation-plan",
        "type": "CAP",
        "id": "los-altos_ca_plan_1"
    },
    {
        "name": "City of Santa Clara Climate Action Plan 2022",
        "adoptionDate": "2022-06-01",
        "documentLink": "https://www.santaclaraca.gov/home/showpublisheddocument/77735/637915985944730000#:~:text=Santa%20Clara's%20updated%20Climate%20Action,social%20and%20economic%20co%2Dbenefits",
        "pageLink": "",
        "type": "CAP",
        "id": "santa-clara_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2021-07-21",
        "documentLink": "https://storage.googleapis.com/proudcity/fairfaxca/uploads/2021/10/FX-CAP-2030-photos-10-26-21_Final.pdf",
        "pageLink": "https://www.townoffairfax.org/documents/climate-action-plan_2030/",
        "type": "CAP",
        "id": "fairfax_ca_plan_1"
    },
    {
        "name": "Larkspur Climate Action Plan",
        "adoptionDate": "2021-07-01",
        "documentLink": "https://www.ci.larkspur.ca.us/DocumentCenter/View/13508/Final-Larkspur-CAP-2030-October-2021?bidId=",
        "pageLink": "https://www.ci.larkspur.ca.us/156/Climate-Action-Plan",
        "type": "CAP",
        "id": "larkspur_ca_plan_1"
    },
    {
        "name": "General Plan 2035 Policy White Paper: Climate Change Action Plan",
        "adoptionDate": "2009-03-01",
        "documentLink": "http://novato.org/home/showdocument?id=12601",
        "pageLink": "http://novato.org/government/community-development/general-plan-update/white-paper-topics/climate-change-action-plan",
        "type": "CAP",
        "id": "novato_ca_plan_1"
    },
    {
        "name": "Community Climate Action Plan",
        "adoptionDate": "2015-03-31",
        "documentLink": "http://www.cityoforoville.org/home/showdocument?id=12191",
        "pageLink": "http://www.cityoforoville.org/services/planning-development-services-department/planning-division/planning-documents",
        "type": "CAP",
        "id": "oroville_ca_plan_1"
    },
    {
        "name": "Hayward Climate Action Plan",
        "adoptionDate": "",
        "documentLink": "http://www.hayward-ca.gov/sites/default/files/Hayward_CAP_FINAL_11-6-09%20-%20full%20document.pdf",
        "pageLink": "http://www.hayward-ca.gov/services/city-services/climate-action",
        "type": "CAP",
        "id": "hayward_ca_plan_1"
    },
    {
        "name": "2022 Climate Action Plan",
        "adoptionDate": "2022-11-28",
        "documentLink": "https://livermoreclimateaction.com/wp-content/uploads/2022/11/2022-CAP-Final.pdf",
        "pageLink": "https://livermoreclimateaction.com/",
        "type": "CAP",
        "id": "livermore_ca_plan_1"
    },
    {
        "name": "Climate Action Plan 2.0",
        "adoptionDate": "2022-02-15",
        "documentLink": "https://cap.cityofpleasantonca.gov/CAP/PleasantonCAP_20220401.pdf?_t=1649196919",
        "pageLink": "http://www.cityofpleasantonca.gov/gov/depts/os/env/cap/resources.asp",
        "type": "CAP",
        "id": "pleasanton_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2017-11-01",
        "documentLink": "https://www.belmont.gov/home/showdocument?id=15622",
        "pageLink": "https://www.belmont.gov/city-hall/community-development/climate-action-plan#ad-image-0",
        "type": "CAP",
        "id": "belmont_ca_plan_1"
    },
    {
        "name": "City of Burlingame 2030 Climate Action Plan",
        "adoptionDate": "2019-08-01",
        "documentLink": "https://cms6.revize.com/revize/burlingamecity/document_center/Sustainability/CAP/Climate%20Action%20Plan_FINAL.pdf",
        "pageLink": "https://www.burlingame.org/departments/sustainability/climate_change.php",
        "type": "CAP",
        "id": "burlingame_ca_plan_1"
    },
    {
        "name": "The Daly City Green Vision - Ten for Twenty",
        "adoptionDate": "",
        "documentLink": "https://www.dalycity.org/DocumentCenter/View/694/Daly-City-Green-Vision-Final-PDF?bidId=",
        "pageLink": "https://www.dalycity.org/245/Daly-Citys-Green-Vision",
        "type": "CAP",
        "id": "daly-city_ca_plan_1"
    },
    {
        "name": "Climate Mitigation and Adaptation Plan",
        "adoptionDate": "2021-09-27",
        "documentLink": "https://www.cityofsancarlos.org/home/showdocument?id=6727&t=637600587418444510",
        "pageLink": "https://www.cityofsancarlos.org/government/departments/city-manager-s-office-communications/responsible-environment/climate-action-plan",
        "type": "CAP",
        "id": "san-carlos_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2014-02-13",
        "documentLink": "https://cdm16255.contentdm.oclc.org/digital/collection/p16255coll1/id/173/",
        "pageLink": "https://www.ssf.net/departments/economic-community-development/planning-division/planning-documents/approved-policy-documents",
        "type": "CAP",
        "id": "south-san-francisco_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2015-09-22",
        "documentLink": "https://www.woodsidetown.org/sites/default/files/fileattachments/planning/page/4631/town_of_woodside_-_final_climate_action_plan.pdf",
        "pageLink": "https://www.woodsidetown.org/planning/climate-action-plan",
        "type": "CAP",
        "id": "woodside_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2011-04-01",
        "documentLink": "http://worldcat.org/arcviewer/12/CBG/2016/08/05/H1470418974861/viewer/file2.asp",
        "pageLink": "http://www.rocklin.ca.us/",
        "type": "CAP",
        "id": "rocklin_ca_plan_1"
    },
    {
        "name": "Communitywide Sustainability Action Plan",
        "adoptionDate": "2010-10-01",
        "documentLink": "https://cdn5-hosted.civiclive.com/UserFiles/Servers/Server_7964838/File/Government/Departments/Development%20Services/Planning/Citywide%20Planning%20Documents/Communitywide%20Sustaintability%20Action%20Plan.pdf",
        "pageLink": "https://www.roseville.ca.us/government/departments/development_services/planning/citywide_planning_documents",
        "type": "CAP",
        "id": "roseville_ca_plan_1"
    },
    {
        "name": "Climate Action Plan 2.0",
        "adoptionDate": "2018-03-19",
        "documentLink": "https://cdn5-hosted.civiclive.com/UserFiles/Servers/Server_13659739/File/Service/CAP%202.0_CC%20Adoption.pdf?v=NHwRybCti&v=NHwRybCti",
        "pageLink": "https://piedmont.ca.gov/services___departments/planning___building/general_plan___other_policy_documents/climate_action_plan",
        "type": "CAP",
        "id": "piedmont_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2012-10-01",
        "documentLink": "https://www.cityofmerced.org/departments/development-services/planning-division/climate-action-plan/-folder-1228",
        "pageLink": "https://www.cityofmerced.org/departments/development-services/planning-division/climate-action-plan/-folder-1228",
        "type": "CAP",
        "id": "merced_ca_plan_1"
    },
    {
        "name": "Santa Rosa Climate Action Plan",
        "adoptionDate": "2012-06-05",
        "documentLink": "http://ci.santa-rosa.ca.us/doclib/Documents/CDP_SR_FINAL_CAP_20120711.pdf",
        "pageLink": "http://ci.santa-rosa.ca.us/environmental_stewardship/GHG/Pages/default.aspx",
        "type": "CAP",
        "id": "santa-rosa_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2013-05-21",
        "documentLink": "http://www.el-cerrito.org/DocumentCenter/View/2689",
        "pageLink": "http://www.el-cerrito.org/index.aspx?NID=325",
        "type": "CAP",
        "id": "el-cerrito_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2014-10-22",
        "documentLink": "https://www.moraga.ca.us/DocumentCenter/View/406/Climate-Action-Plan-CAP-PDF",
        "pageLink": "https://www.moraga.ca.us/199/Climate-Action-Plan-CAP#:~:text=The%20CAP%20is%20Moraga's%20long,wastewater%20and%20solid%20waste%20management.",
        "type": "CAP",
        "id": "moraga_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2014-11-20",
        "documentLink": "https://www.lodi.gov/DocumentCenter/View/43/Climate-Action-Plan-PDF?bidId=",
        "pageLink": "http://www.lodi.gov/community_development/",
        "type": "CAP",
        "id": "lodi_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2013-10-15",
        "documentLink": "http://www.ci.manteca.ca.us/communitydevelopment/Documents/Final%20Climate%20Action%20Plan.pdf",
        "pageLink": "",
        "type": "CAP",
        "id": "manteca_ca_plan_1"
    },
    {
        "name": "Sustainability Action Plan",
        "adoptionDate": "2011-02-01",
        "documentLink": "https://www.cityoftracy.org/home/showpublisheddocument/2950/637514921184370000",
        "pageLink": "https://www.cityoftracy.org/our-city/departments/planning/sustainability-action-plan",
        "type": "CAP",
        "id": "tracy_ca_plan_1"
    },
    {
        "name": "CLIMATE ACTION PLAN",
        "adoptionDate": "2020-10-20",
        "documentLink": "https://www.cityofslt.us/DocumentCenter/View/14460/SLT-CAP-DRAFT",
        "pageLink": "https://cityofslt.us/1126/Sustainability#:~:text=The%20City%20of%20South%20Lake,the%20impacts%20of%20climate%20change.",
        "type": "CAP",
        "id": "south-lake-tahoe_ca_plan_1"
    },
    {
        "name": "Yuba City Resource Efficiency Plan",
        "adoptionDate": "2016-08-01",
        "documentLink": "https://cdn5-hosted.civiclive.com/UserFiles/Servers/Server_239174/File/Development%20Services/Resource%20Links/Resource%20Efficiency%20Plan_Final.pdf",
        "pageLink": "",
        "type": "CAP",
        "id": "yuba-city_ca_plan_1"
    },
    {
        "name": "Greenhouse Gas Emissions Reduction Strategy",
        "adoptionDate": "2018-08-28",
        "documentLink": "https://www.folsom.ca.us/home/showpublisheddocument/254/637463083694000000",
        "pageLink": "https://www.folsom.ca.us/government/community-development/planning-services/general-plan",
        "type": "CAP",
        "id": "folsom_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2014-04-01",
        "documentLink": "http://www.ci.calistoga.ca.us/home/showdocument?id=24005",
        "pageLink": "http://www.ci.calistoga.ca.us/city-hall/departments-services/planning-building-department/plans-programs-and-land-use-regulations",
        "type": "CAP",
        "id": "calistoga_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2016-09-20",
        "documentLink": "http://www.townofyountville.com/home/showdocument?id=4864",
        "pageLink": "http://www.townofyountville.com/departments-services/planning-building/go-green-team",
        "type": "CAP",
        "id": "yountville_ca_plan_1"
    },
    {
        "name": "Climate Action and Reslience Plan",
        "adoptionDate": "2020-05-06",
        "documentLink": "https://www.antiochca.gov/fc/environment/climate/carp/Final-CARP.pdf",
        "pageLink": "https://www.antiochca.gov/environmental-resources/climate-change/climate-action-resilience-plan/",
        "type": "CAP",
        "id": "antioch_ca_plan_1"
    },
    {
        "name": "Citywide Climate Action Plan",
        "adoptionDate": "2016-07-23",
        "documentLink": "http://www.cityofconcord.org/pdf/dept/planning/climate.pdf",
        "pageLink": "",
        "type": "CAP",
        "id": "concord_ca_plan_1"
    },
    {
        "name": "Sustainability Action Plan",
        "adoptionDate": "2013-03-19",
        "documentLink": "https://www.danville.ca.gov/DocumentCenter/View/520/Sustainability-Action-Plan-PDF?bidId=",
        "pageLink": "https://www.danville.ca.gov/546/General-Plan",
        "type": "CAP",
        "id": "danville_ca_plan_1"
    },
    {
        "name": "City of Martinez Climate Action Plan",
        "adoptionDate": "2009-06-01",
        "documentLink": "https://www.cityofmartinez.org/home/showpublisheddocument/1046/637730386746830000",
        "pageLink": "https://www.cityofmartinez.org/government/sustainability-resources/climate-action-plan",
        "type": "CAP",
        "id": "martinez_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2011-08-23",
        "documentLink": "https://cdn5-hosted.civiclive.com/UserFiles/Servers/Server_10826046/File/Our%20City/Departments/Community%20Development/Planning/General%20Plan/Climate%20Action%20Plan/adoptedcap.pdf",
        "pageLink": "https://www.sanramon.ca.gov/our_city/departments_and_divisions/community_development/planning_services/general_plan_and_housing_element_update",
        "type": "CAP",
        "id": "san-ramon_ca_plan_1"
    },
    {
        "name": "Milpitas Climate Action Plan",
        "adoptionDate": "",
        "documentLink": "https://www.milpitas.gov/DocumentCenter/View/892/Climate-Action-Plan-Update---May-2022-PDF",
        "pageLink": "https://www.milpitas.gov/313/Climate-Action-Plan",
        "type": "CAP",
        "id": "milpitas_ca_plan_1"
    },
    {
        "name": "Citrus Heights Greenhouse Gas Reduction Plan",
        "adoptionDate": "2011-08-11",
        "documentLink": "",
        "pageLink": "http://www.citrusheights.net/203/Greenhouse-Gas-Reduction-Plan",
        "type": "CAP",
        "id": "citrus-heights_ca_plan_1"
    },
    {
        "name": "Elk Grove Climate Action Plan",
        "adoptionDate": "2019-02-27",
        "documentLink": "https://cdn5-hosted.civiclive.com/UserFiles/Servers/Server_109585/File/Departments/Planning/Projects/General%20Plan/GPU/Amend_2019-12/ElkGrove_CAP_Amended_December2019.pdf",
        "pageLink": "https://www.elkgrovecity.org/city_hall/departments_divisions/planning/city_special_projects/climate_action_plan",
        "type": "CAP",
        "id": "elk-grove_ca_plan_1"
    },
    {
        "name": "City of Galt Climate Action Plan",
        "adoptionDate": "2020-03-03",
        "documentLink": "https://www.cityofgalt.org/home/showpublisheddocument/32881/637195424684930000",
        "pageLink": "https://www.cityofgalt.org/our-city/to-be-deleted/climate-action-plan-cap",
        "type": "CAP",
        "id": "galt_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2012-02-14",
        "documentLink": "https://www.cityofsacramento.org/-/media/Corporate/Files/CDD/Planning/Major-Projects/generalPlan/Climate-Action-and-Adaptation-Plan---April-28--2023.pdf?la=en",
        "pageLink": "https://www.cityofsacramento.org/Community-Development/Planning/Major-Projects/General-Plan/About-The-Project/Climate_Change#:~:text=The%20full%20Draft%20Climate%20Action,will%20run%20through%20August%202023.",
        "type": "CAP",
        "id": "sacramento_ca_plan_1"
    },
    {
        "name": "Strategic Energy Plan",
        "adoptionDate": "2015-09-01",
        "documentLink": "http://www.ci.oakley.ca.us/wp-content/uploads/2015/09/Oakley-SEP-FINAL-Version.pdf",
        "pageLink": "https://www.ci.oakley.ca.us/departments/planning-zoning/environmental-programs/",
        "type": "CAP",
        "id": "oakley_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2014-08-01",
        "documentLink": "http://www.stocktongov.com/files/Climate_Action_Plan_August_2014.pdf",
        "pageLink": "http://www.stocktongov.com/government/boardCom/clim.html",
        "type": "CAP",
        "id": "stockton_ca_plan_1"
    },
    {
        "name": "Climate Action Plan City of Redwood",
        "adoptionDate": "2020-11-16",
        "documentLink": "https://www.redwoodcity.org/home/showpublisheddocument/22781/637426822669070000",
        "pageLink": "https://www.redwoodcity.org/departments/public-works/environmental-initiatives",
        "type": "CAP",
        "id": "redwood-city_ca_plan_1"
    },
    {
        "name": "CLIMATE CHANGE ACTION PLAN 2030",
        "adoptionDate": "2019-05-20",
        "documentLink": "https://storage.googleapis.com/proudcity/sanrafaelca/uploads/2019/06/Att-D-CCAP-2030-Final-Draft-4-23-19.pdf",
        "pageLink": "https://www.cityofsanrafael.org/climate-change-action-plan/",
        "type": "CAP",
        "id": "san-rafael_ca_plan_1"
    },
    {
        "name": "Davis Climate Action and Adaptation Plan",
        "adoptionDate": "2010-06-01",
        "documentLink": "http://community-development.cityofdavis.org/Media/CommunityDevelopment/Documents/PDF/CDD/Sustainability/Davis-Climate-Action-Adaptation-Plan-20100106.pdf",
        "pageLink": "http://cityofdavis.org/city-hall/community-development-and-sustainability/sustainability-program",
        "type": "CAP",
        "id": "davis_ca_plan_1"
    },
    {
        "name": "Winters Climate Action Plan",
        "adoptionDate": "2021-07-20",
        "documentLink": "http://www.cityofwinters.org/wp-content/uploads/2021/07/2021_0316CAP_FINAL.pdf",
        "pageLink": "http://www.cityofwinters.org/climate-action-plan/",
        "type": "CAP",
        "id": "winters_ca_plan_1"
    },
    {
        "name": "2035 Climate Action Plan",
        "adoptionDate": "2017-05-01",
        "documentLink": "https://www.cityofwoodland.org/DocumentCenter/View/834/Climate-Action-Plan-PDF",
        "pageLink": "https://www.cityofwoodland.org/444/Climate-Action-Plan",
        "type": "CAP",
        "id": "woodland_ca_plan_1"
    },
    {
        "name": "Energy & Conservation Action Strategy",
        "adoptionDate": "2021-03-01",
        "documentLink": "https://www.ci.vacaville.ca.us/home/showpublisheddocument/19096/637685163886370000",
        "pageLink": "https://www.ci.vacaville.ca.us/government/community-development/advanced-planning/adopted-plans/general-plan/energy-and-conservation-action-strategy-ecas",
        "type": "CAP",
        "id": "vacaville_ca_plan_1"
    },
    {
        "name": "Equitable Climate Action Plan",
        "adoptionDate": "2020-07-01",
        "documentLink": "https://cao-94612.s3.amazonaws.com/documents/Oakland-ECAP-07-24.pdf",
        "pageLink": "https://www.oaklandca.gov/projects/2030ecap",
        "type": "CAP",
        "id": "oakland_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2015-06-16",
        "documentLink": "https://www.sausalito.gov/home/showpublisheddocument/17750/636326254065130000",
        "pageLink": "https://www.sausalito.gov/city-government/boards-and-commissions/sustainability-commission",
        "type": "CAP",
        "id": "sausalito_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2016-10-25",
        "documentLink": "http://www.ci.richmond.ca.us/DocumentCenter/View/40636",
        "pageLink": "http://www.ci.richmond.ca.us/3313/Climate-Action-Plan",
        "type": "CAP",
        "id": "richmond_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2013-10-02",
        "documentLink": "http://www.ci.san-pablo.ca.us/DocumentCenter/View/2438",
        "pageLink": "",
        "type": "CAP",
        "id": "san-pablo_ca_plan_1"
    },
    {
        "name": "Environmental Action Plan",
        "adoptionDate": "2007-11-13",
        "documentLink": "https://www.lovelafayette.org/home/showpublisheddocument/4138/636469583046330000",
        "pageLink": "https://www.lovelafayette.org/why-lafayette/green-lafayette/cities-for-climate-protection",
        "type": "CAP",
        "id": "lafayette_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "",
        "documentLink": "https://www.city.fortbragg.com/home/showpublisheddocument/380/637709989995770000",
        "pageLink": "https://city.fortbragg.com/206/Sustainability",
        "type": "CAP",
        "id": "fort-bragg_ca_plan_1"
    },
    {
        "name": "Alameda Climate Action and Resiliency Plan",
        "adoptionDate": "2019-09-01",
        "documentLink": "https://www.alamedaca.gov/files/sharedassets/public/public-works/climate-action-page/new-folder/final-carp-9-2019/alameda_carp_final_091119noappendices.pdf",
        "pageLink": "https://www.alamedaca.gov/CITYWIDE-PROJECTS/Climate-Action-and-Environmental-Sustainability-in-Alameda/Climate-Action-and-Resiliency-Plan#:~:text=Through%20adoption%20of%20its%20award,neutral%20as%20soon%20as%20possible.",
        "type": "CAP",
        "id": "alameda_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "",
        "documentLink": "https://berkeleyca.gov/sites/default/files/2022-01/Berkeley-Climate-Action-Plan.pdf",
        "pageLink": "http://www.cityofberkeley.info/ContentDisplay.aspx?id=70996",
        "type": "CAP",
        "id": "berkeley_ca_plan_1"
    },
    {
        "name": "City of Dublin Climate Action Plan Update",
        "adoptionDate": "2020-08-01",
        "documentLink": "https://www.dublincapupdate.com/wp-content/uploads/2020/10/Final-CAP-edit.pdf",
        "pageLink": "https://dublin.ca.gov/2244/Climate-Action-Plan#:~:text=The%20City%20of%20Dublin%20adopted,opportunities%20presented%20by%20climate%20change.",
        "type": "CAP",
        "id": "dublin_ca_plan_1"
    },
    {
        "name": "The City of Emeryville Climate Action Plan 2.0 2016",
        "adoptionDate": "2016-11-15",
        "documentLink": "http://www.ci.emeryville.ca.us/DocumentCenter/Home/View/9327",
        "pageLink": "http://www.ci.emeryville.ca.us/index.aspx?nid=338",
        "type": "CAP",
        "id": "emeryville_ca_plan_1"
    },
    {
        "name": "City of Newark Climate Action Plan",
        "adoptionDate": "2010-01-01",
        "documentLink": "https://www.newark.org/home/showpublisheddocument/328/636502463456000000",
        "pageLink": "https://www.newark.org/departments/green-newark/climate-action-plan",
        "type": "CAP",
        "id": "newark_ca_plan_1"
    },
    {
        "name": "2021 Climate Action Plan",
        "adoptionDate": "2021-07-19",
        "documentLink": "https://www.sanleandro.org/DocumentCenter/View/6490/San-Leandro-CAP-ADOPTED-2021-08-06",
        "pageLink": "https://www.sanleandro.org/984/Climate-Action-Plan",
        "type": "CAP",
        "id": "san-leandro_ca_plan_1"
    },
    {
        "name": "Climate Action Plan",
        "adoptionDate": "2010-11-01",
        "documentLink": "http://www.ca-ilg.org/sites/main/files/file-attachments/union_city_cap_final.pdf",
        "pageLink": "http://www.ci.union-city.ca.us/departments/going-green/community/climate-action-plan",
        "type": "CAP",
        "id": "union-city_ca_plan_1"
    },
    {
        "name": "City of Fremont Climate Action Plan 2.0",
        "adoptionDate": "",
        "documentLink": "https://www.fremont.gov/home/showpublisheddocument/1631/637752865273470000",
        "pageLink": "https://www.fremont.gov/about/sustainability/climate-action-plan-update",
        "type": "CAP",
        "id": "fremont_ca_plan_1"
    },
    {
        "name": "City of St Helena Greenhouse Gas Emission Reduction Action Plan",
        "adoptionDate": "",
        "documentLink": "https://www.cityofsthelena.org/sites/default/files/fileattachments/planning_resources/page/3505/final_plan_compiled.pdf",
        "pageLink": "https://www.cityofsthelena.org/planning/page/general-plan",
        "type": "CAP",
        "id": "st.-helena_ca_plan_1"
    },
    {
        "name": "Climate Resilience Plan",
        "adoptionDate": "2022-02-01",
        "documentLink": "https://static1.squarespace.com/static/5fc56d55322fd514fec9b972/t/621812ab65b6977752746bcb/1645744817150/FINAL_Town+of+Windsor+Climate+Resilience+Plan+_compressed.pdf",
        "pageLink": "https://windsorready.com/summary",
        "type": "CAP",
        "id": "windsor_ca_plan_1"
    },
    {
        "name": "Climate Action and Adaptation Plan",
        "adoptionDate": "2019-12-02",
        "documentLink": "https://www.albanyca.org/home/showpublisheddocument/43215/637116692863100000",
        "pageLink": "https://www.albanyca.org/departments/sustainability/climate-action-plan/cap-2-0",
        "type": "CAP",
        "id": "albany_ca_plan_1"
    },
    {
        "name": "Regional GHG Reduction Plan 2021",
        "adoptionDate": "2021-03-01",
        "documentLink": "https://www.gosbcta.com/wp-content/uploads/2019/09/San_Bernardino_Regional_GHG_Reduction_Plan_Main_Text_Mar_2021.pdf",
        "pageLink": "gosbcta.com/plan/regional-greenhouse-gas-reduction-plan/",
        "type": "CAP",
        "id": "twentynine-palms_ca_plan_1"
    },
    {
        "name": "Climate Action 2020",
        "adoptionDate": "2018-01-09",
        "documentLink": "https://www.cloverdale.net/DocumentCenter/View/2352/City-Council-Resolution-001-2018-",
        "pageLink": "http://rcpa.ca.gov/projects/climate-action-2020/",
        "type": "CAP",
        "id": "cloverdale_ca_plan_1"
    },
    {
        "name": "Climate Action 2020",
        "adoptionDate": "2018-01-09",
        "documentLink": "https://www.cloverdale.net/DocumentCenter/View/2352/City-Council-Resolution-001-2018-",
        "pageLink": "http://rcpa.ca.gov/projects/climate-action-2020/",
        "type": "CAP",
        "id": "cloverdale_ca_plan_2"
    },
    {
        "name": "Climate Action 2020",
        "adoptionDate": "2018-01-09",
        "documentLink": "https://www.cloverdale.net/DocumentCenter/View/2352/City-Council-Resolution-001-2018-",
        "pageLink": "http://rcpa.ca.gov/projects/climate-action-2020/",
        "type": "CAP",
        "id": "cloverdale_ca_plan_3"
    }
]

const targets = [
    {
        "name": "10% below 2000 by 2020",
        "actionPlanId": "benicia_ca_plan_1"
    },
    {
        "name": "20% below 2000 by 2010-for internal operations",
        "actionPlanId": "rohnert-park_ca_plan_1"
    },
    {
        "name": "Carbon neutral by 2030 (See Climate Emergency Resolution: https://ci.sebastopol.ca.us/getattachment/05965918-a1bc-4267-b111-00317db21c80/Resolution-Number-6274-Declaring-Climate-Emergency.pdf.aspx?lang=en-US&ext=.pdf)",
        "actionPlanId": "sebastopol_ca_plan_1"
    },
    {
        "name": "15% below 2008 by 2020",
        "actionPlanId": "los-gatos_ca_plan_1"
    },
    {
        "name": "40% below 2008 by 2030",
        "actionPlanId": "saratoga_ca_plan_1"
    },
    {
        "name": "80% below 2008 by 2050",
        "actionPlanId": "saratoga_ca_plan_1"
    },
    {
        "name": "reduce community wide emissions by 50% below 2010 levels by 2030",
        "actionPlanId": "cupertino_ca_plan_1"
    },
    {
        "name": "Carbon neutral by 2040",
        "actionPlanId": "cupertino_ca_plan_1"
    },
    {
        "name": "net negative carbon emissions after 2045",
        "actionPlanId": "cupertino_ca_plan_1"
    },
    {
        "name": "80% below 1990 levels by 2030",
        "actionPlanId": "palo-alto_ca_plan_1"
    },
    {
        "name": "100% below 2019 by 2030",
        "actionPlanId": "san-jose_ca_plan_1"
    },
    {
        "name": "49% below 2005 by 2030",
        "actionPlanId": "corte-madera_ca_plan_1"
    },
    {
        "name": "82% below 2005 by 2050",
        "actionPlanId": "corte-madera_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "ross_ca_plan_1"
    },
    {
        "name": "54% below 2005 by 2030",
        "actionPlanId": "san-anselmo_ca_plan_1"
    },
    {
        "name": "80% below 2005 by 2050",
        "actionPlanId": "san-anselmo_ca_plan_1"
    },
    {
        "name": "50% below 1990 by 2030",
        "actionPlanId": "tiburon_ca_plan_1"
    },
    {
        "name": "Carbon neutrality by 2045",
        "actionPlanId": "tiburon_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "atherton_ca_plan_1"
    },
    {
        "name": "49% below 2005 by 2030",
        "actionPlanId": "atherton_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "brisbane_ca_plan_1"
    },
    {
        "name": "49% below 2005 by 2030",
        "actionPlanId": "colma_ca_plan_1"
    },
    {
        "name": "50% below 2005 by 2030",
        "actionPlanId": "east-palo-alto_ca_plan_1"
    },
    {
        "name": "100% below 2005 by 2045",
        "actionPlanId": "east-palo-alto_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "foster-city_ca_plan_1"
    },
    {
        "name": "20% below 2005 by 2025",
        "actionPlanId": "foster-city_ca_plan_1"
    },
    {
        "name": "80% below 2005 by 2050",
        "actionPlanId": "foster-city_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "hillsborough_ca_plan_1"
    },
    {
        "name": "80% below 2005 by 2050",
        "actionPlanId": "hillsborough_ca_plan_1"
    },
    {
        "name": "32% below 2005 by 2025",
        "actionPlanId": "millbrae_ca_plan_1"
    },
    {
        "name": "49% below 2005 by 2030",
        "actionPlanId": "millbrae_ca_plan_1"
    },
    {
        "name": "35% below 2005 by 2020",
        "actionPlanId": "pacifica_ca_plan_1"
    },
    {
        "name": "95% below 2005 (80% below 1990 )",
        "actionPlanId": "pacifica_ca_plan_1"
    },
    {
        "name": "40% below 2005 by 2030",
        "actionPlanId": "belvedere_ca_plan_1"
    },
    {
        "name": "80% below 2005 by 2050",
        "actionPlanId": "belvedere_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "hughson_ca_plan_1"
    },
    {
        "name": "61% below 1990 by 2030",
        "actionPlanId": "san-francisco_ca_plan_1"
    },
    {
        "name": "100% below 2040",
        "actionPlanId": "san-francisco_ca_plan_1"
    },
    {
        "name": "90% below 2005 by 2030",
        "actionPlanId": "menlo-park_ca_plan_1"
    },
    {
        "name": "4.3 MTCO2e per-capita by 2030",
        "actionPlanId": "san-mateo_ca_plan_1"
    },
    {
        "name": "1.2 MTCO2e per-capita by 2050",
        "actionPlanId": "san-mateo_ca_plan_1"
    },
    {
        "name": "15% below 2008 by 2020",
        "actionPlanId": "vallejo_ca_plan_1"
    },
    {
        "name": "56% below 1990 by 2030",
        "actionPlanId": "sunnyvale_ca_plan_1"
    },
    {
        "name": "80% below 1990 by 2050",
        "actionPlanId": "sunnyvale_ca_plan_1"
    },
    {
        "name": "10% below 2005 baseline by 2015",
        "actionPlanId": "mountain-view_ca_plan_1"
    },
    {
        "name": "15–20% below 2005 baseline by 2020",
        "actionPlanId": "mountain-view_ca_plan_1"
    },
    {
        "name": "80% below 2005 baseline by 2050",
        "actionPlanId": "mountain-view_ca_plan_1"
    },
    {
        "name": "86% below 2005 by 2030",
        "actionPlanId": "los-altos_ca_plan_1"
    },
    {
        "name": "98% below 2005 by 2035",
        "actionPlanId": "los-altos_ca_plan_1"
    },
    {
        "name": "40% below 2008 by 2030",
        "actionPlanId": "santa-clara_ca_plan_1"
    },
    {
        "name": "80% below 2008 by 2035",
        "actionPlanId": "santa-clara_ca_plan_1"
    },
    {
        "name": "100% below 2008 by 2045",
        "actionPlanId": "santa-clara_ca_plan_1"
    },
    {
        "name": "100% below 2005 by 2030",
        "actionPlanId": "fairfax_ca_plan_1"
    },
    {
        "name": "40% below 1990 by 2030",
        "actionPlanId": "larkspur_ca_plan_1"
    },
    {
        "name": "80% below 1990 by 2050",
        "actionPlanId": "larkspur_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "novato_ca_plan_1"
    },
    {
        "name": "40% below 2005 by 2035",
        "actionPlanId": "novato_ca_plan_1"
    },
    {
        "name": "11% below 2010 by 2020",
        "actionPlanId": "oroville_ca_plan_1"
    },
    {
        "name": "6% below 2005 by 2013",
        "actionPlanId": "hayward_ca_plan_1"
    },
    {
        "name": "12.5% below 2005 by 2020",
        "actionPlanId": "hayward_ca_plan_1"
    },
    {
        "name": "82.5% below 2005 by 2050",
        "actionPlanId": "hayward_ca_plan_1"
    },
    {
        "name": "40% below 1990 by 2045",
        "actionPlanId": "livermore_ca_plan_1"
    },
    {
        "name": "4.1 MTCO2e by 2030",
        "actionPlanId": "pleasanton_ca_plan_1"
    },
    {
        "name": "0.0 MTC02e by 2045",
        "actionPlanId": "pleasanton_ca_plan_1"
    },
    {
        "name": "15 % below 2005 by 2020",
        "actionPlanId": "burlingame_ca_plan_1"
    },
    {
        "name": "40% below 1990 by 2030",
        "actionPlanId": "burlingame_ca_plan_1"
    },
    {
        "name": "60% below 1990 by 2040",
        "actionPlanId": "burlingame_ca_plan_1"
    },
    {
        "name": "49% below 2005 by 2030",
        "actionPlanId": "san-carlos_ca_plan_1"
    },
    {
        "name": "83% below 2005 by 2050",
        "actionPlanId": "san-carlos_ca_plan_1"
    },
    {
        "name": "15% below 2005 levels by 2020",
        "actionPlanId": "south-san-francisco_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "woodside_ca_plan_1"
    },
    {
        "name": "15% below 2008 by 2020",
        "actionPlanId": "rocklin_ca_plan_1"
    },
    {
        "name": "reduce per service population emissions from 7.5 to 6 by 2020",
        "actionPlanId": "roseville_ca_plan_1"
    },
    {
        "name": "40% below 2005 by 2030",
        "actionPlanId": "piedmont_ca_plan_1"
    },
    {
        "name": "80% below 2005 by 2050",
        "actionPlanId": "piedmont_ca_plan_1"
    },
    {
        "name": "20% below 1990 by 2020",
        "actionPlanId": "merced_ca_plan_1"
    },
    {
        "name": "25% below 1990 by 2020",
        "actionPlanId": "santa-rosa_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "el-cerrito_ca_plan_1"
    },
    {
        "name": "30% below 2005 by 2035",
        "actionPlanId": "el-cerrito_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "moraga_ca_plan_1"
    },
    {
        "name": "4.5 MT CO2e per SP by 2020",
        "actionPlanId": "lodi_ca_plan_1"
    },
    {
        "name": "3.0 MT CO2e per SP by 2030",
        "actionPlanId": "lodi_ca_plan_1"
    },
    {
        "name": "21.7% below 2020 BAU by 2020",
        "actionPlanId": "manteca_ca_plan_1"
    },
    {
        "name": "15% below 2006 in per capita emissions by 2020",
        "actionPlanId": "tracy_ca_plan_1"
    },
    {
        "name": "50% below 2015 by 2030",
        "actionPlanId": "south-lake-tahoe_ca_plan_1"
    },
    {
        "name": "80% below 2015 by 2040",
        "actionPlanId": "south-lake-tahoe_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "yuba-city_ca_plan_1"
    },
    {
        "name": "49% below 2005 by 2035",
        "actionPlanId": "yuba-city_ca_plan_1"
    },
    {
        "name": "6 MTCO2e/capita by 2030",
        "actionPlanId": "folsom_ca_plan_1"
    },
    {
        "name": "4.6 MTCO2e/capita by 2035",
        "actionPlanId": "folsom_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "calistoga_ca_plan_1"
    },
    {
        "name": "36% below 2010 by 2020",
        "actionPlanId": "yountville_ca_plan_1"
    },
    {
        "name": "50% below 2010 by 2030",
        "actionPlanId": "yountville_ca_plan_1"
    },
    {
        "name": "25% below 2005 by 2020",
        "actionPlanId": "antioch_ca_plan_1"
    },
    {
        "name": "80% below 2007 by 2050",
        "actionPlanId": "antioch_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2035",
        "actionPlanId": "concord_ca_plan_1"
    },
    {
        "name": "15% below 2008 by 2020",
        "actionPlanId": "danville_ca_plan_1"
    },
    {
        "name": "80% below 1990 by 2050",
        "actionPlanId": "martinez_ca_plan_1"
    },
    {
        "name": "15% below 2008 by 2020",
        "actionPlanId": "san-ramon_ca_plan_1"
    },
    {
        "name": "40 percent below 2005 by 2030",
        "actionPlanId": "milpitas_ca_plan_1"
    },
    {
        "name": "80 percent below 2005 by 2050",
        "actionPlanId": "milpitas_ca_plan_1"
    },
    {
        "name": "100% below 2005 by 2045",
        "actionPlanId": "milpitas_ca_plan_1"
    },
    {
        "name": "10% to 15% below 2005 by 2020",
        "actionPlanId": "citrus-heights_ca_plan_1"
    },
    {
        "name": "7.6 MTCO2e per capita by 2020",
        "actionPlanId": "elk-grove_ca_plan_1"
    },
    {
        "name": "4.1 MTCO2e per capita by 2030",
        "actionPlanId": "elk-grove_ca_plan_1"
    },
    {
        "name": "5.38 MTCO2e per capita by 2030",
        "actionPlanId": "galt_ca_plan_1"
    },
    {
        "name": "4.02 MTCO2e per capita by 2050",
        "actionPlanId": "galt_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "sacramento_ca_plan_1"
    },
    {
        "name": "38% below 2005 by 2030",
        "actionPlanId": "sacramento_ca_plan_1"
    },
    {
        "name": "83% below 2005 by 2050",
        "actionPlanId": "sacramento_ca_plan_1"
    },
    {
        "name": "10% below 2005 by 2020",
        "actionPlanId": "stockton_ca_plan_1"
    },
    {
        "name": "50% below 2005 by 2030",
        "actionPlanId": "redwood-city_ca_plan_1"
    },
    {
        "name": "100% below 2005 by 2030",
        "actionPlanId": "redwood-city_ca_plan_1"
    },
    {
        "name": "59% below 2005 by 2030",
        "actionPlanId": "san-rafael_ca_plan_1"
    },
    {
        "name": "84% below 2005 by 2050",
        "actionPlanId": "san-rafael_ca_plan_1"
    },
    {
        "name": "1990 by 2010",
        "actionPlanId": "davis_ca_plan_1"
    },
    {
        "name": "7% below 1990 by 2012",
        "actionPlanId": "davis_ca_plan_1"
    },
    {
        "name": "80% below 1990 by 2050",
        "actionPlanId": "davis_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "woodland_ca_plan_1"
    },
    {
        "name": "2.25 MT CO2e per capita",
        "actionPlanId": "woodland_ca_plan_1"
    },
    {
        "name": "44% 2019 by 2035",
        "actionPlanId": "vacaville_ca_plan_1"
    },
    {
        "name": "80% below 2019 by 2050",
        "actionPlanId": "vacaville_ca_plan_1"
    },
    {
        "name": "36% below 2005 by 2020",
        "actionPlanId": "oakland_ca_plan_1"
    },
    {
        "name": "56% below 2005 by 2030",
        "actionPlanId": "oakland_ca_plan_1"
    },
    {
        "name": "83% below 2005 by 2050",
        "actionPlanId": "oakland_ca_plan_1"
    },
    {
        "name": "15% below 2005 levels by 2020",
        "actionPlanId": "sausalito_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "san-pablo_ca_plan_1"
    },
    {
        "name": "30% below 2005 by 2035",
        "actionPlanId": "san-pablo_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020 (community), and 30% below 2005 by 2020 (municipal)",
        "actionPlanId": "fort-bragg_ca_plan_1"
    },
    {
        "name": "25% below 2005 by 2020",
        "actionPlanId": "alameda_ca_plan_1"
    },
    {
        "name": "50% below 2005 by 2030",
        "actionPlanId": "alameda_ca_plan_1"
    },
    {
        "name": "33% below 2000 by 2050",
        "actionPlanId": "berkeley_ca_plan_1"
    },
    {
        "name": "80% below 2000 by 2050",
        "actionPlanId": "berkeley_ca_plan_1"
    },
    {
        "name": "20% below 2015 by 2025",
        "actionPlanId": "dublin_ca_plan_1"
    },
    {
        "name": "100% below 2015 by 2045",
        "actionPlanId": "dublin_ca_plan_1"
    },
    {
        "name": "40% below 2004 by 2030",
        "actionPlanId": "emeryville_ca_plan_1"
    },
    {
        "name": "80% below 2004 by 2050",
        "actionPlanId": "emeryville_ca_plan_1"
    },
    {
        "name": "5% below by 2015",
        "actionPlanId": "newark_ca_plan_1"
    },
    {
        "name": "15% below 2005 by 2020",
        "actionPlanId": "newark_ca_plan_1"
    },
    {
        "name": "40% below 2005 by 2030",
        "actionPlanId": "san-leandro_ca_plan_1"
    },
    {
        "name": "80% below 2005 by 2050",
        "actionPlanId": "san-leandro_ca_plan_1"
    },
    {
        "name": "20% percent below 2005 by 2020",
        "actionPlanId": "union-city_ca_plan_1"
    },
    {
        "name": "55% below 2005 by 2030",
        "actionPlanId": "fremont_ca_plan_1"
    },
    {
        "name": "100% below 2005 by 2030",
        "actionPlanId": "fremont_ca_plan_1"
    },
    {
        "name": "20% below 2005 by 2020",
        "actionPlanId": "st.-helena_ca_plan_1"
    },
    {
        "name": "25% below 1990 by 2020",
        "actionPlanId": "windsor_ca_plan_1"
    },
    {
        "name": "70% below 2004 by 2035",
        "actionPlanId": "albany_ca_plan_1"
    },
    {
        "name": "100% below 2004 by 2045",
        "actionPlanId": "albany_ca_plan_1"
    },
    {
        "name": "46% below 2008 by 2030",
        "actionPlanId": "twentynine-palms_ca_plan_1"
    },
    {
        "name": "5.4 MTCO2 per capita by 2020",
        "actionPlanId": "cloverdale_ca_plan_1"
    },
]

module.exports = {
    cities,
    actionPlans,
    targets
};