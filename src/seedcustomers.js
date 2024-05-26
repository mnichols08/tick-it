const customers = [
  {
    "lookup": 90001,
    "name": "Southern Auto Supply",
    "phone": "",
    "address": "Southern Auto Supply Mt Lake Park MD 21550"
  },
  {
    "lookup": 3,
    "name": "Paid Out Account",
    "phone": "",
    "address": "Paid Out Account"
  },
  {
    "lookup": 2,
    "name": "Farris Farm",
    "phone": 5403031000,
    "address": "Farris Farm Berkeley Springs WV 25411"
  },
  {
    "lookup": 5,
    "name": "84 Lumber #0928",
    "phone": 3013346184,
    "address": "84 Lumber #0928 Scenic 135 & Ind. Park Dr Oakland MD 21550"
  },
  {
    "lookup": 6,
    "name": "8Z Timber Products",
    "phone": 3046986434,
    "address": "8Z Timber Products PO Box 474 Rowlesburg WV 26425"
  },
  {
    "lookup": 7,
    "name": "A & D Well LLC",
    "phone": 8143434970,
    "address": "A & D Well LLC P.O. Box 245 Philipsburg PA 16866"
  },
  {
    "lookup": 10,
    "name": "A & K Auto Service",
    "phone": 3047892333,
    "address": "A & K Auto Service East State Ave. Terra Alta WV 26764"
  },
  {
    "lookup": 11,
    "name": "A & T Car And Truck RePair",
    "phone": 3044549607,
    "address": "A & T Car And Truck RePair 1569 Russ Deberry Rd Terra Alta WV 26764"
  },
  {
    "lookup": 15,
    "name": "Albert Wengerd",
    "phone": 3013344596,
    "address": "Albert Wengerd H.C. 71 Box 118 Augusta WV 26704"
  },
  {
    "lookup": 25,
    "name": "Accident V.F.D.",
    "phone": "",
    "address": "Accident V.F.D. Accident MD 21520"
  },
  {
    "lookup": 50,
    "name": "Autoland Cdjr",
    "phone": 3017468181,
    "address": "Autoland Cdjr 113 South Main St. Accident MD 21520"
  },
  {
    "lookup": 75,
    "name": "Ace Quick Lube",
    "phone": 3013345181,
    "address": "Ace Quick Lube 103 N Third St. Oakland MD 21550"
  },
  {
    "lookup": 100,
    "name": "Test Account",
    "phone": "",
    "address": "Test Account"
  },
  {
    "lookup": 100,
    "name": "Mr Jeff Ackerman",
    "phone": "",
    "address": "Mr Jeff Ackerman 2491 Shady Dell Rd. Oakland MD 21550"
  },
  {
    "lookup": 225,
    "name": "Action Hardware And Fasteners",
    "phone": 3017468485,
    "address": "Action Hardware And Fasteners P.O. Box 9 Mchenry MD 21541-0009"
  },
  {
    "lookup": 250,
    "name": "Adam Construction",
    "phone": 3013874898,
    "address": "Adam Construction 5312 Sang Run Rd. Mchenry MD 21541"
  },
  {
    "lookup": 300,
    "name": "Adams Garage",
    "phone": 3046937079,
    "address": "Adams Garage 290 Adams Lane Mt Storm WV 26739"
  },
  {
    "lookup": 325,
    "name": "Adam's Trucking",
    "phone": 3047355855,
    "address": "Adam's Trucking 212 Parsons Rd Aurora WV 26705"
  },
  {
    "lookup": 326,
    "name": "Advance Auto Parts 5882",
    "phone": 3042968914,
    "address": "Advance Auto Parts 5882 1000 Fairmont Rd Morgantown WV 26501"
  },
  {
    "lookup": 327,
    "name": "Advance Auto Parts 7210",
    "phone": 3042912095,
    "address": "Advance Auto Parts 7210 1460 Earl L Core Rd Morgantown WV 26505"
  },
  {
    "lookup": 328,
    "name": "Advance Auto Parts 7500",
    "phone": 3043293148,
    "address": "Advance Auto Parts 7500 318 E Main St Kingwood WV 26537"
  },
  {
    "lookup": 329,
    "name": "Advance Auto Parts 6216",
    "phone": 3015330952,
    "address": "Advance Auto Parts 6216 12809 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 330,
    "name": "AEI Builders",
    "phone": 3016166407,
    "address": "AEI Builders PO Box 676 Oakland MD 21550"
  },
  {
    "lookup": 331,
    "name": "Advance Auto Parts 7260",
    "phone": 3042842050,
    "address": "Advance Auto Parts 7260 830 Monogahela Blvd Morgantown WV 26505"
  },
  {
    "lookup": 332,
    "name": "Advance Auto Parts 5593",
    "phone": 3045922095,
    "address": "Advance Auto Parts 5593 210 S Pike St Shinnston WV 26431"
  },
  {
    "lookup": 333,
    "name": "Advance Auto Parts 6099",
    "phone": 3043633476,
    "address": "Advance Auto Parts 6099 2784 White Hall Blvd Fairmont WV 26554"
  },
  {
    "lookup": 334,
    "name": "Advance Auto Parts 7180",
    "phone": 3048421901,
    "address": "Advance Auto Parts 7180 1025 W Main St Bridgeport WV 26330"
  },
  {
    "lookup": 335,
    "name": "Advance Auto Parts 7200",
    "phone": 3046368438,
    "address": "Advance Auto Parts 7200 730 Beverly Pike Elkins WV 26241"
  },
  {
    "lookup": 336,
    "name": "Advance Auto Parts 7310",
    "phone": 3042691191,
    "address": "Advance Auto Parts 7310 100 Marketplace Mall Ste 2-A Weston WV 26452"
  },
  {
    "lookup": 337,
    "name": "Advance Auto Parts 7400",
    "phone": 3042652030,
    "address": "Advance Auto Parts 7400 502 Blueville Dr Grafton WV 26354"
  },
  {
    "lookup": 338,
    "name": "Advance Auto Parts 7440",
    "phone": 3046226171,
    "address": "Advance Auto Parts 7440 417 Buckhannon Pike Clarksburg WV 26301"
  },
  {
    "lookup": 339,
    "name": "Advance Auto Parts 7490",
    "phone": 3044572040,
    "address": "Advance Auto Parts 7490 Rt 4 Box 320F / Rt250S Philippi WV 26416"
  },
  {
    "lookup": 340,
    "name": "Advance Auto Parts 7559",
    "phone": 3044622771,
    "address": "Advance Auto Parts 7559 3 Foodland Plaza Glenville WV 26351"
  },
  {
    "lookup": 341,
    "name": "Advance Auto Parts 7560",
    "phone": 3043662615,
    "address": "Advance Auto Parts 7560 917 Morgantown Ave Fairmont WV 26554"
  },
  {
    "lookup": 342,
    "name": "Advance Auto Parts 7945",
    "phone": 3044722199,
    "address": "Advance Auto Parts 7945 181 S Kanawha St Buckhannon WV 26201"
  },
  {
    "lookup": 343,
    "name": "Advance Auto Parts 8915",
    "phone": 3049863629,
    "address": "Advance Auto Parts 8915 3 Rainbow Plaza Mannington WV 26582"
  },
  {
    "lookup": 344,
    "name": "Advance Auto Parts 7724",
    "phone": 7244911050,
    "address": "Advance Auto Parts 7724 2175 Mcclellandtown Rd Masontown PA 15461"
  },
  {
    "lookup": 345,
    "name": "Advance Auto Parts 7520",
    "phone": 3017880011,
    "address": "Advance Auto Parts 7520 Rr. 3 Box 3134 Keyser WV 26726"
  },
  {
    "lookup": 346,
    "name": "Advance Auto Parts #6098",
    "phone": 5406222563,
    "address": "Advance Auto Parts #6098 28 North Commerce Avenue Front Royal VA 22630"
  },
  {
    "lookup": 350,
    "name": "Ag-Future Inc.",
    "phone": 3013341269,
    "address": "Ag-Future Inc. 1113 Youghiogheny Drive Mt Lake Park MD 21550"
  },
  {
    "lookup": 360,
    "name": "Mary Ann Maze",
    "phone": 3013343838,
    "address": "Mary Ann Maze 2226 Rag Tavern Rd Terra Alta WV 26764"
  },
  {
    "lookup": 400,
    "name": "Mr George Ahern",
    "phone": 5406658514,
    "address": "Mr George Ahern 700 Ross St. Winchester VA 22601"
  },
  {
    "lookup": 425,
    "name": "Alden's Boat RePair",
    "phone": "",
    "address": "Alden's Boat RePair 852 Pysell Crosscut Rd Oakland MD 21550"
  },
  {
    "lookup": 430,
    "name": "Ali Ghan Hirage",
    "phone": 3013345276,
    "address": "Ali Ghan Hirage P.O. Box 184 Oakland MD 21550"
  },
  {
    "lookup": 500,
    "name": "All Construction",
    "phone": 3046937131,
    "address": "All Construction PO Box 232 Mt Storm WV 26739"
  },
  {
    "lookup": 550,
    "name": "All Season Contracting",
    "phone": 3015333232,
    "address": "All Season Contracting 405 Markwood Dr. Oakland MD 21550"
  },
  {
    "lookup": 600,
    "name": "New Allegheny Inc.",
    "phone": 3046937621,
    "address": "New Allegheny Inc. P.O. Box 307 Mt Storm WV 26739"
  },
  {
    "lookup": 625,
    "name": "Amtower Auto Supply Inc.",
    "phone": 3045926272,
    "address": "Amtower Auto Supply Inc. P.O. Box 4639 Bridgeport WV 26330"
  },
  {
    "lookup": 650,
    "name": "Amtowers Hilltop Collision Ctr",
    "phone": 3047882995,
    "address": "Amtowers Hilltop Collision Ctr Rt. 5 Box 494 Keyser WV 26726"
  },
  {
    "lookup": 700,
    "name": "Appalachian Center",
    "phone": 3013348146,
    "address": "Appalachian Center 39 S. Third Street Oakland MD 21550-1519"
  },
  {
    "lookup": 725,
    "name": "Appalachian Iron",
    "phone": 3013879312,
    "address": "Appalachian Iron 1103 Spring Glade Road Oakland MD 21550"
  },
  {
    "lookup": 775,
    "name": "Appalachian Railway Services",
    "phone": 3013341888,
    "address": "Appalachian Railway Services P.O.Box 2368 Mt Lake Park MD 21550"
  },
  {
    "lookup": 777,
    "name": "Appalachian Services LLC",
    "phone": 3016160334,
    "address": "Appalachian Services LLC 336 Cedar Ln Oakland MD 21550"
  },
  {
    "lookup": 795,
    "name": "Appalachian Wood Pellets, Inc",
    "phone": 3043294000,
    "address": "Appalachian Wood Pellets, Inc PO Box 601 Kingwood WV 26537"
  },
  {
    "lookup": 850,
    "name": "Allegheny Power",
    "phone": 3017595747,
    "address": "Allegheny Power 12454 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 875,
    "name": "Alleghany Investments LLC",
    "phone": 3046937131,
    "address": "Alleghany Investments LLC Rt. 93 Mt Storm WV 26739"
  },
  {
    "lookup": 880,
    "name": "All In Plumbing",
    "phone": 3015016209,
    "address": "All In Plumbing 21 Warnick St Oakland MD 21550"
  },
  {
    "lookup": 900,
    "name": "Allegheny Welding",
    "phone": 3013348181,
    "address": "Allegheny Welding P.O. Box 166 Oakland MD 21550"
  },
  {
    "lookup": 910,
    "name": "Alleghany Well Drilling",
    "phone": 3013343950,
    "address": "Alleghany Well Drilling P.O. Box 3118 Swanton MD 21561"
  },
  {
    "lookup": 915,
    "name": "Allegany Wood Products Mill #2",
    "phone": 3042571082,
    "address": "Allegany Wood Products Mill #2 P.O. Box 319 Mt Storm WV 26739"
  },
  {
    "lookup": 925,
    "name": "Allegheny Wood Products Mill 3",
    "phone": 3042571082,
    "address": "Allegheny Wood Products Mill 3 P.O. Box 63 Bayard WV 26707"
  },
  {
    "lookup": 930,
    "name": "Allegheny Wood Prod. Mill # 5",
    "phone": 3043292097,
    "address": "Allegheny Wood Prod. Mill # 5 P.O. Box 130 Kingwood WV 26537"
  },
  {
    "lookup": 945,
    "name": "Alpine Lake Public Utilities",
    "phone": "",
    "address": "Alpine Lake Public Utilities 1813 Alpine Lake Rd Terra Alta WV 26764"
  },
  {
    "lookup": 950,
    "name": "Alpine Lake Resort",
    "phone": 3047892481,
    "address": "Alpine Lake Resort 700 West Alpine Drive Terra Alta WV 26764"
  },
  {
    "lookup": 960,
    "name": "Alcorp",
    "phone": 3047355745,
    "address": "Alcorp 5247 Auror Pike Aurora WV 26705"
  },
  {
    "lookup": 962,
    "name": "Ama Excavating",
    "phone": 3047355714,
    "address": "Ama Excavating 2854 Aurora Pike Aurora WV 26705"
  },
  {
    "lookup": 965,
    "name": "Rapid RePair",
    "phone": 3013346243,
    "address": "Rapid RePair 913 Snowycreek Rd. Oakland MD 21550"
  },
  {
    "lookup": 985985,
    "name": "Aristeo Construction Co.",
    "phone": 7344279111,
    "address": "Aristeo Construction Co. 12811 Farmington Rd Livonia Mi 48150"
  },
  {
    "lookup": 990,
    "name": "Aronholt & Sons",
    "phone": 3046937096,
    "address": "Aronholt & Sons Hc 76 Box 510 Mt Storm WV 26739"
  },
  {
    "lookup": 1070,
    "name": "Donald Arnett",
    "phone": 3047355782,
    "address": "Donald Arnett 6271 Lantz Ridge Rd. Aurora WV 26705"
  },
  {
    "lookup": 1100,
    "name": "Cathedral Equipment",
    "phone": 3042888560,
    "address": "Cathedral Equipment 5121 Lantz Ridge Rd Aurora WV 26705"
  },
  {
    "lookup": 1300,
    "name": "Arnold Brothers Equipment Corp",
    "phone": 3013349605,
    "address": "Arnold Brothers Equipment Corp 105 Arnold Lane Mt Lake Park MD 21550"
  },
  {
    "lookup": 1400,
    "name": "Arnold Trucking",
    "phone": "",
    "address": "Arnold Trucking Rt.1 Box 219C Aurora WV 26705"
  },
  {
    "lookup": 1450,
    "name": "Mr. Barry Arnold",
    "phone": 3047356917,
    "address": "Mr. Barry Arnold 1522 Cathedral Way Aurora WV 26705"
  },
  {
    "lookup": 1600,
    "name": "F.T. Arnold & Sons",
    "phone": 3013349560,
    "address": "F.T. Arnold & Sons 741 Dennett Road Oakland MD 21550"
  },
  {
    "lookup": 1700,
    "name": "Frank Arnold Contractors Inc.",
    "phone": 3013342450,
    "address": "Frank Arnold Contractors Inc. 151 Oakland Dr. Oakland MD 21550"
  },
  {
    "lookup": 1725,
    "name": "Todd Arnold Construction",
    "phone": 3047355113,
    "address": "Todd Arnold Construction 5280 Maple Spring Hwy. Aurora WV 26705"
  },
  {
    "lookup": 1760,
    "name": "Ashby Truck RePair",
    "phone": 3013344440,
    "address": "Ashby Truck RePair PO Box 643 Oakland MD 21550"
  },
  {
    "lookup": 1775,
    "name": "Arrowhead Machine",
    "phone": 3047896490,
    "address": "Arrowhead Machine 1207 Russ Deberry Road Terra Alta WV 26764"
  },
  {
    "lookup": 1800,
    "name": "Joe Ashby & Sons",
    "phone": 3043342577,
    "address": "Joe Ashby & Sons P.O. Box 305 Oakland MD 21550"
  },
  {
    "lookup": 2000,
    "name": "Ashby Fire Equipment",
    "phone": 3013342193,
    "address": "Ashby Fire Equipment P.O. Box 208 Oakland MD 21550"
  },
  {
    "lookup": 2010,
    "name": "Asplundh Tree Experts",
    "phone": 3013590467,
    "address": "Asplundh Tree Experts 316 E. Pennington Street Oakland MD 21550"
  },
  {
    "lookup": 2015,
    "name": "Ashby's Tree Farm",
    "phone": 3013879069,
    "address": "Ashby's Tree Farm 1646 Swanton Road Swanton MD 21561"
  },
  {
    "lookup": 2050,
    "name": "Aurora VFD",
    "phone": 3047355797,
    "address": "Aurora VFD 25781 George Washington Hwy. Aurora WV 26705"
  },
  {
    "lookup": 2100,
    "name": "Automotive Machine Inc.",
    "phone": 3013341105,
    "address": "Automotive Machine Inc. 310 Baltimore Ave. Mt Lake Park MD 21550"
  },
  {
    "lookup": 2125,
    "name": "Auto Express",
    "phone": 3013348446,
    "address": "Auto Express 109 G Street Mt Lake Park MD 21550"
  },
  {
    "lookup": 2150,
    "name": "Auto Shop",
    "phone": 3046937660,
    "address": "Auto Shop Box 6 Maple Street Bayard WV 26707"
  },
  {
    "lookup": 2160,
    "name": "The Auto Station",
    "phone": 3013341041,
    "address": "The Auto Station 12421 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 2175,
    "name": "Axalta Coating Systems LLC",
    "phone": "",
    "address": "Axalta Coating Systems LLC Two Commerce Square 2001 Market St. Suite 3600 Philadelphia PA 19103"
  },
  {
    "lookup": 2195,
    "name": "BB Custom Airbrush Designs",
    "phone": 3017073815,
    "address": "BB Custom Airbrush Designs 23508 Westernport Rd Westernport MD 21562"
  },
  {
    "lookup": 2200,
    "name": "B & G Lumber",
    "phone": 3013344974,
    "address": "B & G Lumber 112 Potomac Camp Rd. Oakland MD 21550"
  },
  {
    "lookup": 2225,
    "name": "B & R Distributing Co.",
    "phone": 3013341670,
    "address": "B & R Distributing Co. Rt 6 Box 552 Oakland MD 21550-9603"
  },
  {
    "lookup": 2295,
    "name": "Belt Paving Inc.",
    "phone": "",
    "address": "Belt Paving Inc. P.O. Box 1002 Cumberland MD 21501"
  },
  {
    "lookup": 2300,
    "name": "James P. Belowsky",
    "phone": 3014533241,
    "address": "James P. Belowsky 3145 Walnut Bottom Rd. Swanton MD 21561"
  },
  {
    "lookup": 2410,
    "name": "Baker's Garage",
    "phone": 3013341232,
    "address": "Baker's Garage 1423 Silver Knob Rd. Oakland MD 21550"
  },
  {
    "lookup": 2425,
    "name": "Bayard V.F.D.",
    "phone": 3046989618,
    "address": "Bayard V.F.D. Box 215 Attn: Felicia Dewitt Bayard WV 26707"
  },
  {
    "lookup": 2430,
    "name": "Rolling Hills Farm",
    "phone": 3047355242,
    "address": "Rolling Hills Farm 1326 Horse Shoe Run Rd. Eglon WV 26716"
  },
  {
    "lookup": 2440,
    "name": "Bachtel Enterprise",
    "phone": 3047355860,
    "address": "Bachtel Enterprise 230 Youghiogeny Dr. Aurora WV 26705"
  },
  {
    "lookup": 2441,
    "name": "Kenneth Bachtel Mt View Farms",
    "phone": 3016165570,
    "address": "Kenneth Bachtel Mt View Farms 605 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 2442,
    "name": "Backbone Mt On-Off Road",
    "phone": 3013345701,
    "address": "Backbone Mt On-Off Road 4707 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 2443,
    "name": "Backbone Mtn. Performance",
    "phone": 3048442237,
    "address": "Backbone Mtn. Performance 111 Spruce St. Davisville WV 26142"
  },
  {
    "lookup": 2445,
    "name": "Countryside Lawn Equipment",
    "phone": 3013343550,
    "address": "Countryside Lawn Equipment 1158 Shady Dell Road Oakland MD 21550"
  },
  {
    "lookup": 2450,
    "name": "O.C. Cluss",
    "phone": 3013343258,
    "address": "O.C. Cluss 92 Service Center Dr. Oakland MD 21550"
  },
  {
    "lookup": 2550,
    "name": "Beachy Welding",
    "phone": 3013342726,
    "address": "Beachy Welding 480 Clifton Drive Deer Park MD 21550"
  },
  {
    "lookup": 2555,
    "name": "Beacon Resources Inc",
    "phone": 8149264250,
    "address": "Beacon Resources Inc 208 West Mud Pike Rd Rockwood PA 15557"
  },
  {
    "lookup": 2570,
    "name": "Mickey Beeman",
    "phone": 3016169991,
    "address": "Mickey Beeman 1324 Mount Zion Rd Swanton MD 21561"
  },
  {
    "lookup": 2590,
    "name": "Beckley Drilling",
    "phone": 3042568385,
    "address": "Beckley Drilling P.O. Box 1907 Beaver WV 25813"
  },
  {
    "lookup": 2600,
    "name": "Delbie Beckman",
    "phone": 3013341201,
    "address": "Delbie Beckman 7855 Gorman Rd Oakland MD 21550"
  },
  {
    "lookup": 2605,
    "name": "Diane Beckman",
    "phone": 2403216601,
    "address": "Diane Beckman P.O. Box 2023 Oakland MD 21550"
  },
  {
    "lookup": 2650,
    "name": "Keith Beckman",
    "phone": 3013348448,
    "address": "Keith Beckman 192 Truesdale Rd Oakland MD 21550"
  },
  {
    "lookup": 2675,
    "name": "Kevin Beckman",
    "phone": "",
    "address": "Kevin Beckman 514 Maple Avenue Mt Lake Park MD 21550"
  },
  {
    "lookup": 2700,
    "name": "Beckman Lumber",
    "phone": 3013343128,
    "address": "Beckman Lumber 3832 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 2725,
    "name": "Beckman Trucking",
    "phone": 3013343128,
    "address": "Beckman Trucking 3832 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 2750,
    "name": "Beckman's Variety Store",
    "phone": 3013343331,
    "address": "Beckman's Variety Store 3832 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 2900,
    "name": "Beitzel Excavating LLC",
    "phone": 3016162412,
    "address": "Beitzel Excavating LLC P.O.Box 635 Oakland MD 21550"
  },
  {
    "lookup": 3000,
    "name": "Beitzel Corporation",
    "phone": 3012454107,
    "address": "Beitzel Corporation Accounts PAyable 333 Corporate Dr Grantsville MD 21536"
  },
  {
    "lookup": 3175,
    "name": "Bennetts Truck Parts",
    "phone": 3016167449,
    "address": "Bennetts Truck Parts 122 Earl HaUser Rd Oakland MD 21550"
  },
  {
    "lookup": 3200,
    "name": "Ryan \"Big Monet\" Bentz",
    "phone": 2404227732,
    "address": "Ryan \"Big Monet\" Bentz 18528 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 3225,
    "name": "Kevin Bernard",
    "phone": 3016164338,
    "address": "Kevin Bernard 757 SmoUse Rd Oakland MD 21550"
  },
  {
    "lookup": 3300,
    "name": "Deep Creek Metals",
    "phone": 3018594080,
    "address": "Deep Creek Metals 2662 Spring Lick Swanton MD 21561"
  },
  {
    "lookup": 3400,
    "name": "Bills Marine Service",
    "phone": 3013875536,
    "address": "Bills Marine Service 20721 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 3425,
    "name": "Billy Bender Chevrolet",
    "phone": 3018955115,
    "address": "Billy Bender Chevrolet 10355 Mt Savage Rd Nw Cumberland MD 21502"
  },
  {
    "lookup": 3470,
    "name": "All Seasons Maintenance",
    "phone": 3013348133,
    "address": "All Seasons Maintenance 4684 Hutton Rd. Oakland MD 21550"
  },
  {
    "lookup": 3500,
    "name": "BLG Brothers LLC.",
    "phone": "",
    "address": "BLG Brothers LLC. 213 Bachtel Ln Eglon WV 26716"
  },
  {
    "lookup": 3560,
    "name": "Jessica Bittinger",
    "phone": "",
    "address": "Jessica Bittinger 507 E St Mountain Lake Park MD 21550"
  },
  {
    "lookup": 3595,
    "name": "Blackwater Falls State Park",
    "phone": 3042595216,
    "address": "Blackwater Falls State Park PO Box 490 1584 Blackwater Lodge Rd Davis WV 26260"
  },
  {
    "lookup": 3600,
    "name": "Blackwater Motor Company",
    "phone": 6814359044,
    "address": "Blackwater Motor Company 13 Tlc Ln Thomas WV 26292"
  },
  {
    "lookup": 3640,
    "name": "Terry Blamble Excavating",
    "phone": 3013344088,
    "address": "Terry Blamble Excavating 76 Earl HaUser Road Oakland MD 21550"
  },
  {
    "lookup": 3642,
    "name": "Bloomington Vol. Fire Dept",
    "phone": 3013593729,
    "address": "Bloomington Vol. Fire Dept P.O. Box 12 Bloomington MD 21523"
  },
  {
    "lookup": 3644,
    "name": "Blue Ribbon Lumber",
    "phone": 3013345810,
    "address": "Blue Ribbon Lumber 1679 Blue Ribbon Road Oakland MD 21550"
  },
  {
    "lookup": 3645,
    "name": "Blue Ribbon Pallet",
    "phone": 3013345810,
    "address": "Blue Ribbon Pallet 1679 Blue Ribbon Road Oakland MD 21550"
  },
  {
    "lookup": 3650,
    "name": "Blums Auto RePair",
    "phone": 3013348716,
    "address": "Blums Auto RePair 153 Blueberry Lane Oakland MD 21550"
  },
  {
    "lookup": 3700,
    "name": "Bob's Auto RePair",
    "phone": 3013344421,
    "address": "Bob's Auto RePair 345 Crellin Mine Rd. Oakland MD 21550"
  },
  {
    "lookup": 3900,
    "name": "Bob's Garage & Auto Sales",
    "phone": 3044359251,
    "address": "Bob's Garage & Auto Sales 33946 Veterans Memorial Hwy. Terra Alta WV 26764"
  },
  {
    "lookup": 3925,
    "name": "Bobs Ginseng",
    "phone": 3046937544,
    "address": "Bobs Ginseng 7943 Union Hwy Mt Storm WV 26739"
  },
  {
    "lookup": 3930,
    "name": "Dan Boone",
    "phone": "",
    "address": "Dan Boone 103 White Dale Church Rd Terra Alta WV 26764"
  },
  {
    "lookup": 3950,
    "name": "Leroy Bolding",
    "phone": 3013344757,
    "address": "Leroy Bolding 1740 Garrett Road Oakland MD 21550"
  },
  {
    "lookup": 3955,
    "name": "Leroy's Garage And Trucking LLC",
    "phone": 3048132778,
    "address": "Leroy's Garage And Trucking LLC 130 Dump Truck Lane Mount Storm WV 26739"
  },
  {
    "lookup": 3975,
    "name": "Jeremy S. Bolyard Construction",
    "phone": 3016167590,
    "address": "Jeremy S. Bolyard Construction P.O. Box 95 Bayard WV 26707"
  },
  {
    "lookup": 4000,
    "name": "Borderline Sales & Service",
    "phone": 3013346444,
    "address": "Borderline Sales & Service 632 George Washington Hy Oakland MD 21550"
  },
  {
    "lookup": 4050,
    "name": "Bosley Construction",
    "phone": 3013870069,
    "address": "Bosley Construction 731 Lakeshore Dr. Oakland MD 21550"
  },
  {
    "lookup": 4055,
    "name": "Diggers Construction",
    "phone": 3043294055,
    "address": "Diggers Construction 14642 S. Prestion Hwy Kingwood WV 26537"
  },
  {
    "lookup": 4060,
    "name": "Boyce Auto Electric",
    "phone": 3016162552,
    "address": "Boyce Auto Electric 5626 Saltlick Rd Terra Alta WV 26764"
  },
  {
    "lookup": 4150,
    "name": "Mr. Vincent E. Bowman",
    "phone": 3015330992,
    "address": "Mr. Vincent E. Bowman 1070 Sunrise Drive Oakland MD 21550"
  },
  {
    "lookup": 4300,
    "name": "Brad's Auto RePair",
    "phone": 3017464033,
    "address": "Brad's Auto RePair P.O. Box 395 Friendsville MD 21531"
  },
  {
    "lookup": 4500,
    "name": "Brenneman Well Drilling Inc.",
    "phone": 3018268111,
    "address": "Brenneman Well Drilling Inc. P.O. Bx 245 Accident MD 21520"
  },
  {
    "lookup": 4600,
    "name": "Broadwater RePair",
    "phone": 3013878171,
    "address": "Broadwater RePair 4232 Sandflat Rd. Oakland MD 21550"
  },
  {
    "lookup": 4725,
    "name": "Broadwater Towing",
    "phone": 3018954244,
    "address": "Broadwater Towing 159 Chestnut Ridge Rd. Grantsville MD 21536"
  },
  {
    "lookup": 4900,
    "name": "Brookside Trucking",
    "phone": 3016163161,
    "address": "Brookside Trucking 25973 George Washington Hwy Aurora WV 26705"
  },
  {
    "lookup": 4915,
    "name": "Mr Donnie G. Brown",
    "phone": "",
    "address": "Mr Donnie G. Brown Rt.3 Box 210K Gormania WV 26720"
  },
  {
    "lookup": 4920,
    "name": "Mr. Gary D. Brown",
    "phone": 3046937323,
    "address": "Mr. Gary D. Brown Rt. 1 Box 205A3 Gormania WV 26720"
  },
  {
    "lookup": 4925,
    "name": "Mr. Roger L. Brown Sr.",
    "phone": 3013341549,
    "address": "Mr. Roger L. Brown Sr. 4445 Maryland Hgy. Oakland MD 21550"
  },
  {
    "lookup": 4985,
    "name": "Brodak's Discount Liqours",
    "phone": 3013342671,
    "address": "Brodak's Discount Liqours 12743 Garrett Hwy Suite 1 Oakland MD 21550"
  },
  {
    "lookup": 5000,
    "name": "Brownings Auto Sales",
    "phone": 3013343270,
    "address": "Brownings Auto Sales 9 Church Street Oakland MD 21550"
  },
  {
    "lookup": 5200,
    "name": "Oakland Shop N Save",
    "phone": 3013348105,
    "address": "Oakland Shop N Save 406 Weber Road Oakland MD 21550"
  },
  {
    "lookup": 5325,
    "name": "Bryan's Autobody",
    "phone": 3047896249,
    "address": "Bryan's Autobody 24 Greggs Knob Rd Terra Alta WV 26764"
  },
  {
    "lookup": 5400,
    "name": "Buddy's Used Cars LLC",
    "phone": 3013876455,
    "address": "Buddy's Used Cars LLC 19326 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 5450,
    "name": "Burns Auto Care",
    "phone": 3046212494,
    "address": "Burns Auto Care 36 Belden Dr Thomas WV 26292"
  },
  {
    "lookup": 5460,
    "name": "Burns Industrial Equipment",
    "phone": "",
    "address": "Burns Industrial Equipment 210 Thorm Hill Road Warrendale PA 15086"
  },
  {
    "lookup": 5660,
    "name": "Larry Burdick",
    "phone": 3047896864,
    "address": "Larry Burdick 127 Terra Alta Lake Road Terra Alta WV 26764"
  },
  {
    "lookup": 5700,
    "name": "Art Butler Auto Sales",
    "phone": 3017468227,
    "address": "Art Butler Auto Sales 33728 Garrett Hwy Accident MD 21520"
  },
  {
    "lookup": 5900,
    "name": "Butler General Hauling",
    "phone": 3013349677,
    "address": "Butler General Hauling 311 Mayer Ave. Terra Alta WV 26764"
  },
  {
    "lookup": 5975,
    "name": "Butler Painting",
    "phone": 3016163041,
    "address": "Butler Painting 985 Garrett Rd Oakland MD 21550"
  },
  {
    "lookup": 6000,
    "name": "Mr. Bill Butler",
    "phone": "",
    "address": "Mr. Bill Butler 810 Sunnyside Rd. Oakland MD 21550"
  },
  {
    "lookup": 6130,
    "name": "Butts Garage",
    "phone": 3013349204,
    "address": "Butts Garage 179 Gorman Street Oakland MD 21550"
  },
  {
    "lookup": 6135,
    "name": "C & A Hauling",
    "phone": 3013344896,
    "address": "C & A Hauling 398 Harley Lane Oakland MD 21550"
  },
  {
    "lookup": 6175,
    "name": "C & J Hartsell Trucking LLC",
    "phone": 3016168687,
    "address": "C & J Hartsell Trucking LLC Rt.3 Box 77 Terra Alta WV 26764"
  },
  {
    "lookup": 6200,
    "name": "C M Used Cars",
    "phone": 3047353013,
    "address": "C M Used Cars Rr 1 Box 357 Aurora WV 26705"
  },
  {
    "lookup": 6225,
    "name": "C.N. Metals",
    "phone": 3013349170,
    "address": "C.N. Metals 762 Joni Miller Road Oakland MD 21550"
  },
  {
    "lookup": 6250,
    "name": "C & R Trees",
    "phone": 3047896648,
    "address": "C & R Trees 609 Feather Rd Terra Alta WV 26764"
  },
  {
    "lookup": 6255,
    "name": "CRB Timber",
    "phone": 3046925721,
    "address": "CRB Timber 653 Feather Rd Terra Alta WV 26764"
  },
  {
    "lookup": 6300,
    "name": "CMC Enterprises",
    "phone": 3046937128,
    "address": "CMC Enterprises Hc 76 Mt Storm WV 26739"
  },
  {
    "lookup": 6400,
    "name": "CMC",
    "phone": 3013876209,
    "address": "CMC 103 Railcar Lane Swanton MD 21561"
  },
  {
    "lookup": 6500,
    "name": "CSX Equipment",
    "phone": 8042267456,
    "address": "CSX Equipment 1 CSX Road Richmond VA 23230"
  },
  {
    "lookup": 6520,
    "name": "CSXT Justin Bishop",
    "phone": 3042650787,
    "address": "CSXT Justin Bishop 599 CSX Way Grafton WV 26354"
  },
  {
    "lookup": 6525,
    "name": "CSXT Josh Hagan",
    "phone": 3046772025,
    "address": "CSXT Josh Hagan 300 Mineral St. Keyser WV 26726"
  },
  {
    "lookup": 6620,
    "name": "Suddenlink Communications",
    "phone": 3044724193,
    "address": "Suddenlink Communications 68 Fifth Street Buckhannon WV 26201"
  },
  {
    "lookup": 6625,
    "name": "Mr Cecil A. Calcamp Jr.",
    "phone": 3046937072,
    "address": "Mr Cecil A. Calcamp Jr. Hc 76 Box 48 Mt Storm WV 26739"
  },
  {
    "lookup": 6626,
    "name": "Bryan Calhoun",
    "phone": "",
    "address": "Bryan Calhoun 697 Monte Vista Rd Oakland MD 21550"
  },
  {
    "lookup": 6635,
    "name": "Callis' Auto Detailing",
    "phone": 3013344189,
    "address": "Callis' Auto Detailing 4343 Maryland Hgy. Oakland MD 21550"
  },
  {
    "lookup": 6638,
    "name": "CalVary Logging LLC",
    "phone": 3016169875,
    "address": "CalVary Logging LLC 315 Lemoyne King Rd Oakland MD 21550"
  },
  {
    "lookup": 6639,
    "name": "Cardinal Hill Woodworking",
    "phone": 3016161784,
    "address": "Cardinal Hill Woodworking 89 Swantamont Rd Swanton MD 21561"
  },
  {
    "lookup": 6640,
    "name": "Caney VAlley Marine",
    "phone": 7243298700,
    "address": "Caney VAlley Marine 161 Caney VAlley Rd Markleysburg PA 15459"
  },
  {
    "lookup": 6650,
    "name": "Carquest Auto Parts",
    "phone": 3018953118,
    "address": "Carquest Auto Parts P.O. Box 337 Grantsville MD 21536"
  },
  {
    "lookup": 6660,
    "name": "Carroll Harvey Contracting",
    "phone": 3013346156,
    "address": "Carroll Harvey Contracting 409 I St Mountain Lake Park MD 21550"
  },
  {
    "lookup": 6670,
    "name": "Carl Belt Inc.",
    "phone": 3017298900,
    "address": "Carl Belt Inc. P.O. Box 1210 Cumberland MD 21501"
  },
  {
    "lookup": 6671,
    "name": "Doug Thayer",
    "phone": 1,
    "address": "Doug Thayer 107 Cemetery Hill Road Swanton MD 21561"
  },
  {
    "lookup": 6672,
    "name": "Rick Carvell",
    "phone": 3013879025,
    "address": "Rick Carvell P.O. Box 143 Swanton MD 21561"
  },
  {
    "lookup": 6675,
    "name": "Bill Casteel",
    "phone": 3047892774,
    "address": "Bill Casteel Rt. 1 Box43B6 Terra Alta WV 26764"
  },
  {
    "lookup": 6710,
    "name": "Chapman Garage",
    "phone": 3046937404,
    "address": "Chapman Garage P.O. Box 130 Mt Storm WV 26739"
  },
  {
    "lookup": 6720,
    "name": "Chapman Hauling",
    "phone": 3013341473,
    "address": "Chapman Hauling 208 W. 2Nd Ave. Mt Lake Park MD 21550"
  },
  {
    "lookup": 6730,
    "name": "Chapman Timber",
    "phone": 3044465438,
    "address": "Chapman Timber Rt.1 Box 151 Elk Garden WV 26717"
  },
  {
    "lookup": 6750,
    "name": "Chase Ashby",
    "phone": 3013876236,
    "address": "Chase Ashby 1648 Swaton Rd Swanton MD 21561"
  },
  {
    "lookup": 6770,
    "name": "Chase Trucking LLC",
    "phone": 3047896315,
    "address": "Chase Trucking LLC 1491 Brandonville Pike Terra Alta WV 26764"
  },
  {
    "lookup": 6775,
    "name": "MGM Rentals",
    "phone": 3013344963,
    "address": "MGM Rentals 2294 Old Crellin Rd. Oakland MD 21550"
  },
  {
    "lookup": 6800,
    "name": "Cherry Creek Enterprises",
    "phone": 3013345824,
    "address": "Cherry Creek Enterprises 143 Cherry Creek Lane Oakland MD 21550"
  },
  {
    "lookup": 6950,
    "name": "Chestnut Ridge Nursery",
    "phone": 3018953194,
    "address": "Chestnut Ridge Nursery Po. Box 84 Grantsville MD 21536"
  },
  {
    "lookup": 7000,
    "name": "Christian Car Care",
    "phone": 3013878318,
    "address": "Christian Car Care 3200 Sand Flat Road Oakland MD 21550"
  },
  {
    "lookup": 7100,
    "name": "Clark's Exxon Service Center",
    "phone": 3046937520,
    "address": "Clark's Exxon Service Center P.O. Box 233 Mt Storm WV 26739"
  },
  {
    "lookup": 7125,
    "name": "City Of Kingwood",
    "phone": 3043291225,
    "address": "City Of Kingwood 313 Tunnelton St Kingwood WV 26537"
  },
  {
    "lookup": 7130,
    "name": "City Of Thomas",
    "phone": 3044634360,
    "address": "City Of Thomas P.O Box 248 Thomas WV 26292"
  },
  {
    "lookup": 7150,
    "name": "Classie Car Company",
    "phone": 3013344995,
    "address": "Classie Car Company 53 High View Dr. Oakland MD 21550"
  },
  {
    "lookup": 7160,
    "name": "Chloma Farms LLC",
    "phone": 3013344705,
    "address": "Chloma Farms LLC 216 Chloma Lane Oakland MD 21550"
  },
  {
    "lookup": 7175,
    "name": "Coastal Lumber Company",
    "phone": 3047356701,
    "address": "Coastal Lumber Company Rt. 1 Box 295 Horseshoe Run WV 26716"
  },
  {
    "lookup": 7190,
    "name": "Clay Cam Logging LLC",
    "phone": "",
    "address": "Clay Cam Logging LLC Rr 2 Box 63A Moatsville WV 26405"
  },
  {
    "lookup": 7350,
    "name": "Columbia Gas & Transmission",
    "phone": 3047893040,
    "address": "Columbia Gas & Transmission 8251 Aurora Pike Terra Alta WV 26764"
  },
  {
    "lookup": 7400,
    "name": "Community Action Weatherizatio",
    "phone": 3013349431,
    "address": "Community Action Weatherizatio 104 East Center St. Oakland MD 21550"
  },
  {
    "lookup": 7450,
    "name": "Complete Trucking & Transport Ll",
    "phone": "",
    "address": "Complete Trucking & Transport Ll 4768 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 7452,
    "name": "Cook's Auto Body",
    "phone": 3048147697,
    "address": "Cook's Auto Body 100 Gardener's Lane New Creek WV 26743"
  },
  {
    "lookup": 7453,
    "name": "The Computer Shop",
    "phone": 2403212244,
    "address": "The Computer Shop 13179 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 7455,
    "name": "Corks Cars",
    "phone": 3013340601,
    "address": "Corks Cars 10012 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 7460,
    "name": "Cosner Logging",
    "phone": "",
    "address": "Cosner Logging Hc 76 Box 250 Mt Storm WV 26739"
  },
  {
    "lookup": 7465,
    "name": "Cosner Trucking",
    "phone": 3016165897,
    "address": "Cosner Trucking 23 East Water St. Oakland MD 21550"
  },
  {
    "lookup": 7468,
    "name": "Country Roads Transport",
    "phone": 3046989799,
    "address": "Country Roads Transport 188 Ridnour Rd Morgantown WV 26508"
  },
  {
    "lookup": 7470,
    "name": "Country Services Contacting LLC",
    "phone": 3047896876,
    "address": "Country Services Contacting LLC 6833 Cranesville Road Terra Alta WV 26764"
  },
  {
    "lookup": 7477,
    "name": "Cranesville Quarry - Keystone",
    "phone": "",
    "address": "Cranesville Quarry - Keystone P.O. Box 318 Kingwood WV 26537"
  },
  {
    "lookup": 7482,
    "name": "Crellin Assembly Of God",
    "phone": 3013343867,
    "address": "Crellin Assembly Of God 2220 Hutton Rd Oakland MD 21550"
  },
  {
    "lookup": 7485,
    "name": "Crimson Shamrock LLC",
    "phone": 3047356413,
    "address": "Crimson Shamrock LLC 893 Eglon Rd Eglon WV 26716"
  },
  {
    "lookup": 7500,
    "name": "Cumberland Concrete Inc.",
    "phone": 3013876300,
    "address": "Cumberland Concrete Inc. P.O. Box 3369 Lavale MD 21502"
  },
  {
    "lookup": 7600,
    "name": "Mr Kenn R. Cummings",
    "phone": 3013348551,
    "address": "Mr Kenn R. Cummings 6285 George Wash. Highway Oakland MD 21550"
  },
  {
    "lookup": 7650,
    "name": "Charles Custer",
    "phone": 3016169924,
    "address": "Charles Custer 378 Green Gables Road Friendsville MD 21531"
  },
  {
    "lookup": 7700,
    "name": "Mr. Leo Custer",
    "phone": 3013875751,
    "address": "Mr. Leo Custer 6148 Maryland Hwy Oakland MD 21550"
  },
  {
    "lookup": 7800,
    "name": "Mr Leonard Custer",
    "phone": 3015016712,
    "address": "Mr Leonard Custer 864 N Glade Rd Swanton MD 21561"
  },
  {
    "lookup": 7815,
    "name": "Custom Touch",
    "phone": 3013348784,
    "address": "Custom Touch 1225 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 7975,
    "name": "Darvin Gank",
    "phone": 3013342735,
    "address": "Darvin Gank 337 Dinky Track Rd Oakland MD 21550"
  },
  {
    "lookup": 7979,
    "name": "D & D Motors",
    "phone": 3014632200,
    "address": "D & D Motors 19521 New George's Creek Rd Barton MD 21521"
  },
  {
    "lookup": 7980,
    "name": "D & B Auto",
    "phone": 3013346990,
    "address": "D & B Auto 6 Bahia Ct. Ocala Fl 34472"
  },
  {
    "lookup": 7985,
    "name": "D & B Welding & Fabrication",
    "phone": 3017864667,
    "address": "D & B Welding & Fabrication 23816 Old Stables Rd. Sw. Rawlings MD 21557"
  },
  {
    "lookup": 7986,
    "name": "D & E Auto Sales Inc",
    "phone": 3047896223,
    "address": "D & E Auto Sales Inc 32202 Veterans Memorial Hwy Terra Alta WV 26764"
  },
  {
    "lookup": 7987,
    "name": "D & E Body Shop",
    "phone": 3013346033,
    "address": "D & E Body Shop 172 Gank Rd. Crellin MD 21550"
  },
  {
    "lookup": 7988,
    "name": "D & E Transport LLC",
    "phone": 3044634810,
    "address": "D & E Transport LLC 318 Pierce Benbush Rd Thomas WV 26292"
  },
  {
    "lookup": 7990,
    "name": "D & J Timber",
    "phone": 3013593764,
    "address": "D & J Timber 18272 Maryland Highway Swanton MD 21561"
  },
  {
    "lookup": 7992,
    "name": "D & M Services",
    "phone": 3016164002,
    "address": "D & M Services 8018 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 7993,
    "name": "D & M Stone",
    "phone": 3016164745,
    "address": "D & M Stone 201 Pee Wee Rd. Kitzmiller MD 21538"
  },
  {
    "lookup": 7995,
    "name": "D & R Distributors",
    "phone": 3043291191,
    "address": "D & R Distributors P.O. Box 1176 Kingwood WV 26537"
  },
  {
    "lookup": 7998,
    "name": "D & S Logging",
    "phone": 3012454078,
    "address": "D & S Logging 13205 Bittinger Rd. Grantsville MD 21536"
  },
  {
    "lookup": 8000,
    "name": "D & S Trucking Co.",
    "phone": 3013342828,
    "address": "D & S Trucking Co. 209 N 11Th Street Oakland MD 21550-1438"
  },
  {
    "lookup": 8050,
    "name": "Dale's Body Shop",
    "phone": 3013349661,
    "address": "Dale's Body Shop P.O. 3138 Deer Park MD 21550"
  },
  {
    "lookup": 8100,
    "name": "Dan's Marine Service Inc",
    "phone": 3042650188,
    "address": "Dan's Marine Service Inc 226 N Pike St Grafton WV 26354"
  },
  {
    "lookup": 8200,
    "name": "Dave's Body Shop",
    "phone": 3013348752,
    "address": "Dave's Body Shop Rt.1 Box 360 J Oakland MD 21550"
  },
  {
    "lookup": 8250,
    "name": "David's Automotive RePair",
    "phone": 3047896309,
    "address": "David's Automotive RePair 2347 Alpine Lake Rd Terra Alta WV 26764"
  },
  {
    "lookup": 8400,
    "name": "Mr. Doug Davis",
    "phone": 3013879005,
    "address": "Mr. Doug Davis 3325 Sand Flat Rd. Oakland MD 21550"
  },
  {
    "lookup": 8450,
    "name": "Dawson Garage",
    "phone": "",
    "address": "Dawson Garage Box 235 Oak Street Elk Garden WV 26717"
  },
  {
    "lookup": 8455,
    "name": "Dylan Dawson",
    "phone": 3018595153,
    "address": "Dylan Dawson 591 Calderwood Rd Oakland MD 21550"
  },
  {
    "lookup": 8460,
    "name": "Dcl Hvac Solutions",
    "phone": 2403216677,
    "address": "Dcl Hvac Solutions 1430 Wilson Rd Oakland MD 21550"
  },
  {
    "lookup": 5471,
    "name": "Deep Creek Lanes",
    "phone": 3013343040,
    "address": "Deep Creek Lanes 499 Oakland Drive Oakland MD 21550"
  },
  {
    "lookup": 8480,
    "name": "Deep Creek Marina",
    "phone": 3013876977,
    "address": "Deep Creek Marina 2010 Deep Creek Drq Mc Henry MD 21541"
  },
  {
    "lookup": 8490,
    "name": "Deep Creek Metal Sales",
    "phone": 3018594080,
    "address": "Deep Creek Metal Sales 2662 Spring Lick Rd Swanton MD 21561"
  },
  {
    "lookup": 8500,
    "name": "Deep Creek Mobil Lube",
    "phone": 3013876767,
    "address": "Deep Creek Mobil Lube 17869 Suite H Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 8550,
    "name": "Deep Creek Trucking Company",
    "phone": 3013875560,
    "address": "Deep Creek Trucking Company 2867 Oakland/Sang Run Rd Oakland MD 21550"
  },
  {
    "lookup": 8600,
    "name": "Deep Creek Vol. Fire Co.",
    "phone": 3013875252,
    "address": "Deep Creek Vol. Fire Co. 1906 Deep Creek Dr. Mchenry MD 21541"
  },
  {
    "lookup": 8640,
    "name": "Deer Park Auto Body",
    "phone": 3013349321,
    "address": "Deer Park Auto Body 424 Edgewood Dr. Deer Park MD 21550"
  },
  {
    "lookup": 8675,
    "name": "Martin Auto Parts",
    "phone": 3013348340,
    "address": "Martin Auto Parts 1076 Pysell Crosscut Rd. Oakland MD 21550"
  },
  {
    "lookup": 8700,
    "name": "Deer Park Community V.F.D. Inc",
    "phone": 3013876662,
    "address": "Deer Park Community V.F.D. Inc P.O. Box 3152 Deer Park MD 21550"
  },
  {
    "lookup": 8725,
    "name": "Deer Park Spring Water",
    "phone": 3013342124,
    "address": "Deer Park Spring Water 104 Hotel Drive Oakland MD 21550"
  },
  {
    "lookup": 8730,
    "name": "Little John Blacksmith",
    "phone": 3048233654,
    "address": "Little John Blacksmith Rt. 1 Box 161 Montrose WV 26283"
  },
  {
    "lookup": 8750,
    "name": "Deerwood Service Center",
    "phone": 3047353333,
    "address": "Deerwood Service Center Rr 1 Aurora WV 26705"
  },
  {
    "lookup": 8775,
    "name": "Mr. John Delaney",
    "phone": 3046937159,
    "address": "Mr. John Delaney Rt.3 Box 209C Gormania WV 26720"
  },
  {
    "lookup": 8785,
    "name": "Delano's Inc.",
    "phone": 3047896966,
    "address": "Delano's Inc. 31658 Veterans Memorial Hwy Terra Alta WV 26764"
  },
  {
    "lookup": 8840,
    "name": "Denrock Excavating",
    "phone": 3013343146,
    "address": "Denrock Excavating 133 Tannery Road Oakland MD 21550"
  },
  {
    "lookup": 8875,
    "name": "D.N.R. Forest & Park",
    "phone": "",
    "address": "D.N.R. Forest & Park Tawes State Office Build. Annapolis MD 21401"
  },
  {
    "lookup": 8950,
    "name": "Beth Friend",
    "phone": 3013343620,
    "address": "Beth Friend 1624 4th Street Waynesboro VA 22980"
  },
  {
    "lookup": 9000,
    "name": "Diehl's Ford Sales",
    "phone": 3018955135,
    "address": "Diehl's Ford Sales P.O. Box 547 Grantsville MD 21536"
  },
  {
    "lookup": 9050,
    "name": "Mr. David W. Dewitt",
    "phone": 3013344636,
    "address": "Mr. David W. Dewitt 1239 SmoUse Rd. Oakland MD 21550"
  },
  {
    "lookup": 9100,
    "name": "Didiwick Logging",
    "phone": 3046937064,
    "address": "Didiwick Logging P.O. Box 103 Mt Storm WV 26739"
  },
  {
    "lookup": 9230,
    "name": "Dilley & Asso.",
    "phone": 3016163218,
    "address": "Dilley & Asso. 452 Dilley Rd Oakland MD 21550"
  },
  {
    "lookup": 9240,
    "name": "Mr. Eugene Dilley",
    "phone": 3013349773,
    "address": "Mr. Eugene Dilley St. Rt. 2 Box 16D Oakland MD 21550"
  },
  {
    "lookup": 9245,
    "name": "Steve Dilley",
    "phone": 3016164265,
    "address": "Steve Dilley 312 Thunderhead Road Oakland MD 21550"
  },
  {
    "lookup": 9277,
    "name": "Dirt Works",
    "phone": 3013345665,
    "address": "Dirt Works 6042 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 9280,
    "name": "Discount Cabinets & More",
    "phone": 3013345656,
    "address": "Discount Cabinets & More 3648 Swanton Road Swanton MD 21561"
  },
  {
    "lookup": 9285,
    "name": "Dixon Automotive",
    "phone": 3047355459,
    "address": "Dixon Automotive P.O. Box 114 Aurora WV 26705"
  },
  {
    "lookup": 9295,
    "name": "Aron Dolly",
    "phone": 3045821872,
    "address": "Aron Dolly PO Box 52 Gormania WV 26720"
  },
  {
    "lookup": 9296,
    "name": "Tommy Dolly",
    "phone": 2403211961,
    "address": "Tommy Dolly 1133 Bane Cut Off Rd Elk Garden WV 26717"
  },
  {
    "lookup": 9300,
    "name": "Deer Park Signs",
    "phone": 3013341344,
    "address": "Deer Park Signs 4162 Maryland Hwy. Oakland MD 21550"
  },
  {
    "lookup": 9400,
    "name": "Doug's Auto & Truck RePair",
    "phone": 3013348892,
    "address": "Doug's Auto & Truck RePair 109 West Second Ave Mt Lake Park MD 21550"
  },
  {
    "lookup": 9425,
    "name": "Double M Recycling",
    "phone": 3015333500,
    "address": "Double M Recycling 406 Swanton Rd Swanton MD 21561"
  },
  {
    "lookup": 9450,
    "name": "Double R Ranch",
    "phone": "",
    "address": "Double R Ranch 237 Bill Roth Rd Eglon WV 26716"
  },
  {
    "lookup": 9475,
    "name": "Dragon Timber",
    "phone": 3016166949,
    "address": "Dragon Timber 236 Doc Bernard Rd Oakland MD 21550"
  },
  {
    "lookup": 9500,
    "name": "P&M Services",
    "phone": 3016167002,
    "address": "P&M Services 616 Norris Welch Rd Oakland MD 21550"
  },
  {
    "lookup": 9600,
    "name": "PAula Dove",
    "phone": 3013343474,
    "address": "PAula Dove P.O. Box 64 Oakland MD 21550"
  },
  {
    "lookup": 9650,
    "name": "Mr. Charlie Drennan Iii",
    "phone": 3015016485,
    "address": "Mr. Charlie Drennan Iii 406 Leighton Dr Oakland MD 21550"
  },
  {
    "lookup": 9700,
    "name": "Waters Run Enterprise",
    "phone": 3012454218,
    "address": "Waters Run Enterprise 3044 Dry Run Rd. Swanton MD 21561"
  },
  {
    "lookup": 9725,
    "name": "Axalta Paint",
    "phone": "",
    "address": "Axalta Paint P.O. Box 8500 Philadelphia PA 19178"
  },
  {
    "lookup": 9759,
    "name": "Durst Farms",
    "phone": 3046987005,
    "address": "Durst Farms 7023 Lantz Ridge Rd Aurora WV 26705"
  },
  {
    "lookup": 9760,
    "name": "Durst Plumbing & Heating",
    "phone": 3018955902,
    "address": "Durst Plumbing & Heating 842 Chestnut Ridge Rd. Grantsville MD 21536"
  },
  {
    "lookup": 9780,
    "name": "E & S General Contracting",
    "phone": 3013874556,
    "address": "E & S General Contracting 1691 Swallow Falls Road Oakland MD 21550"
  },
  {
    "lookup": 9800,
    "name": "PAul Everly",
    "phone": 3013342940,
    "address": "PAul Everly 514 E Street Mt Lake Park MD 21550"
  },
  {
    "lookup": 9801,
    "name": "E-Z Excavating LLC",
    "phone": 2403210524,
    "address": "E-Z Excavating LLC 1499 Gnegy Church Rd Oakland MD 21550"
  },
  {
    "lookup": 9900,
    "name": "Eastern Horizon",
    "phone": 3016162904,
    "address": "Eastern Horizon 281 SmoUse Road Oakland MD 21550"
  },
  {
    "lookup": 9915,
    "name": "East Preston Tire",
    "phone": 3047896700,
    "address": "East Preston Tire P.O. Box 12 Terra Alta WV 26764"
  },
  {
    "lookup": 9975,
    "name": "George C. Edwards",
    "phone": "",
    "address": "George C. Edwards P.O. Boc 658 Grantsville MD 21536"
  },
  {
    "lookup": 10000,
    "name": "Eglon Farm Service Inc.",
    "phone": 3047353761,
    "address": "Eglon Farm Service Inc. P.O. Box 98 Eglon WV 26716"
  },
  {
    "lookup": 10100,
    "name": "Eisentrouts Used Cars",
    "phone": 3013349160,
    "address": "Eisentrouts Used Cars 3793 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 10150,
    "name": "Elaine's Auto Detailing",
    "phone": 3013343666,
    "address": "Elaine's Auto Detailing 1865 Silver Knob Road Oakland MD 21550"
  },
  {
    "lookup": 10170,
    "name": "The End Zone",
    "phone": 3047895050,
    "address": "The End Zone 34001 Veterans Memorial Hwy Terra Alta WV 26764"
  },
  {
    "lookup": 10175,
    "name": "Ennstone Inc T/A Deep Creek",
    "phone": 3013878220,
    "address": "Ennstone Inc T/A Deep Creek P.O. Box 6090 Falmoth VA 22403"
  },
  {
    "lookup": 10200,
    "name": "Dale E. Evans School Bus Accou",
    "phone": 3013343748,
    "address": "Dale E. Evans School Bus Accou 3450 Maryland Hwy. Oakland MD 21550"
  },
  {
    "lookup": 10230,
    "name": "Evans Logging",
    "phone": 3047353027,
    "address": "Evans Logging 3952 Seneca Trl Eglon WV 26716"
  },
  {
    "lookup": 10245,
    "name": "Ervin's Tree Removal",
    "phone": 3013344960,
    "address": "Ervin's Tree Removal 515 Decost Rd. Oakland MD 21550"
  },
  {
    "lookup": 10247,
    "name": "Evans Store",
    "phone": 3047497252,
    "address": "Evans Store General Delivery Scherr WV 26726"
  },
  {
    "lookup": 10255,
    "name": "Evans Trucking LLC",
    "phone": 3047353027,
    "address": "Evans Trucking LLC 3952 Seneca Trl Eglon WV 26716"
  },
  {
    "lookup": 10270,
    "name": "Everson Resources",
    "phone": 3046986829,
    "address": "Everson Resources P.O. Box 606 Kingwood WV 26537"
  },
  {
    "lookup": 10275,
    "name": "Excavating By Dan Baker",
    "phone": 3013875013,
    "address": "Excavating By Dan Baker P.O. Box 95 Oakland MD 21550"
  },
  {
    "lookup": 10282,
    "name": "Explosives Experts Inc",
    "phone": 4107850100,
    "address": "Explosives Experts Inc P.O. Box 718 Parkton MD 21120-0718"
  },
  {
    "lookup": 10400,
    "name": "Fairfax Materials, Inc.",
    "phone": 3013348101,
    "address": "Fairfax Materials, Inc. 8490 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 10425,
    "name": "Fairfax Machine & Welding",
    "phone": 3044634230,
    "address": "Fairfax Machine & Welding 41 Quail Ridge Dr Thomas WV 26292"
  },
  {
    "lookup": 10430,
    "name": "Fast Freddy's LLC",
    "phone": 3047356500,
    "address": "Fast Freddy's LLC 27354 George Washington Hwy Aurora WV 26705"
  },
  {
    "lookup": 10450,
    "name": "Faith Evangelical Free Church",
    "phone": 3013344172,
    "address": "Faith Evangelical Free Church 1009 Maryland Highway Mt Lake Park MD 21550"
  },
  {
    "lookup": 10490,
    "name": "Feather Trucking",
    "phone": 3043799226,
    "address": "Feather Trucking 2388 Beach Run Rd. Albright WV 26519"
  },
  {
    "lookup": 10500,
    "name": "Mr. Phillip Ferguson Jr",
    "phone": 3049401803,
    "address": "Mr. Phillip Ferguson Jr 521 Ferguson Rd Oakland MD 21550"
  },
  {
    "lookup": 10575,
    "name": "Mr. Phillip R. Fike",
    "phone": 3047355146,
    "address": "Mr. Phillip R. Fike 232 Fike Drive Aurora WV 26705"
  },
  {
    "lookup": 10600,
    "name": "Fike Nursery",
    "phone": 3047892309,
    "address": "Fike Nursery Rr1 Box 404 Corinth WV 26764"
  },
  {
    "lookup": 10625,
    "name": "Fike Trucking",
    "phone": 3047892309,
    "address": "Fike Trucking Rr 1 Box 404 Corinth WV 26764"
  },
  {
    "lookup": 10650,
    "name": "J. Fint Construction",
    "phone": 3046986543,
    "address": "J. Fint Construction 23748 George Washington Hwy PO Box A Aurora WV 26705"
  },
  {
    "lookup": 10750,
    "name": "First United National Bank And",
    "phone": 3013349471,
    "address": "First United National Bank And 19 South Second Street Oakland MD 21550"
  },
  {
    "lookup": 10850,
    "name": "Fisher Auto Parts",
    "phone": 3013342181,
    "address": "Fisher Auto Parts Oakland MD 21550"
  },
  {
    "lookup": 10900,
    "name": "Tom Fitzwater",
    "phone": "",
    "address": "Tom Fitzwater 567 Kings Run Rd. Oakland MD 21550"
  },
  {
    "lookup": 11000,
    "name": "Frederick L. Fitzwater Busing",
    "phone": 3013344375,
    "address": "Frederick L. Fitzwater Busing 2636 Pysell Crosscut Rd Oakland MD 21550"
  },
  {
    "lookup": 11100,
    "name": "Fitzwater Furniture",
    "phone": 3013342612,
    "address": "Fitzwater Furniture 1947 Maryland Highway Oakland MD 21550"
  },
  {
    "lookup": 11200,
    "name": "Flanco",
    "phone": 3044634623,
    "address": "Flanco 137 Nelson Rd Thomas WV 26292"
  },
  {
    "lookup": 11225,
    "name": "Fleet Maintenance Service LLC",
    "phone": 3015332140,
    "address": "Fleet Maintenance Service LLC 300 Industrial Dr Oakland MD 21550"
  },
  {
    "lookup": 11250,
    "name": "Flying Scot Inc.",
    "phone": 3013344848,
    "address": "Flying Scot Inc. 157 Cemetery St. Deer Park MD 21550"
  },
  {
    "lookup": 11300,
    "name": "E R Foglepole Truck Co.",
    "phone": 3013343930,
    "address": "E R Foglepole Truck Co. P.O. Box 2039 Mt Lake Park MD 21550"
  },
  {
    "lookup": 11350,
    "name": "Four Generations Logging",
    "phone": 3044465548,
    "address": "Four Generations Logging Rt 1 Box 98 Elk Garden WV 26717"
  },
  {
    "lookup": 11400,
    "name": "Four Seasons Real Estate",
    "phone": 3013875320,
    "address": "Four Seasons Real Estate P.O. Box 552 Oakland MD 21550"
  },
  {
    "lookup": 11475,
    "name": "Kope Enterprises",
    "phone": 3013872770,
    "address": "Kope Enterprises 182 Youghogheny Path Oakland MD 21550"
  },
  {
    "lookup": 11550,
    "name": "Dwayne Fratz Trucking",
    "phone": 3015018760,
    "address": "Dwayne Fratz Trucking 858 Accident Bittinger Rd. Accident MD 21520"
  },
  {
    "lookup": 11610,
    "name": "One Stop Towing And Transport Ll",
    "phone": 3013342262,
    "address": "One Stop Towing And Transport Ll 23 North 4th St. Oakland MD 21550"
  },
  {
    "lookup": 11795,
    "name": "Alex Friend",
    "phone": 2403213108,
    "address": "Alex Friend 110 E 2Nd Ave Loch Lynn MD 21550"
  },
  {
    "lookup": 11800,
    "name": "Mr. Curtis R. Friend",
    "phone": 3013344487,
    "address": "Mr. Curtis R. Friend 4246 Broadford Rd. Deer Park MD 21550"
  },
  {
    "lookup": 11900,
    "name": "Mr. David Friend",
    "phone": 3013344512,
    "address": "Mr. David Friend 494 Meadow Mt. Trail Swanton MD 21561"
  },
  {
    "lookup": 12000,
    "name": "Mr. Jerry B. Friend",
    "phone": 3016161287,
    "address": "Mr. Jerry B. Friend 4437 Maryland Hwy Oakland MD 21550"
  },
  {
    "lookup": 12010,
    "name": "Friendsville Ammoco",
    "phone": 3017465690,
    "address": "Friendsville Ammoco Main Street Friendsville MD 21531"
  },
  {
    "lookup": 12015,
    "name": "Matthew Fritz",
    "phone": 3016899380,
    "address": "Matthew Fritz 2978 Lower New Germany Road Frostburg MD 21532"
  },
  {
    "lookup": 12020,
    "name": "Frostburg Carquest",
    "phone": 3016890166,
    "address": "Frostburg Carquest P.O. Box 456 Frostburg MD 21532"
  },
  {
    "lookup": 12025,
    "name": "Richard Friend Farm",
    "phone": 3013341649,
    "address": "Richard Friend Farm 1716 Gorman Rd. Oakland MD 21550"
  },
  {
    "lookup": 12040,
    "name": "G & C Construction",
    "phone": 3013342696,
    "address": "G & C Construction 93 Ashby Cemetary Rd Oakland MD 21550"
  },
  {
    "lookup": 12045,
    "name": "G & G Auto",
    "phone": 3046937813,
    "address": "G & G Auto P.O. Box 163 Bayard WV 26707"
  },
  {
    "lookup": 12050,
    "name": "G & G Excavating",
    "phone": 3047355836,
    "address": "G & G Excavating P.O. Box 39 Aurora WV 26705"
  },
  {
    "lookup": 12075,
    "name": "Jerry Fritz",
    "phone": 3018955984,
    "address": "Jerry Fritz 10744 New Germany Road Grantsville MD 21536"
  },
  {
    "lookup": 12082,
    "name": "G & J Logging, Inc",
    "phone": 3016895376,
    "address": "G & J Logging, Inc 371 Lancaster Hill Rd Lonaconing MD 21539"
  },
  {
    "lookup": 1283,
    "name": "GMAS",
    "phone": 3015015988,
    "address": "GMAS 2552 Sand Flat Road Oakland MD 21550"
  },
  {
    "lookup": 12085,
    "name": "GMS Mine RePair & Maintence",
    "phone": 3013348186,
    "address": "GMS Mine RePair & Maintence P.O. Box 2446 Mt Lake Park MD 21550"
  },
  {
    "lookup": 12100,
    "name": "G & S Coal Co.",
    "phone": 3013593003,
    "address": "G & S Coal Co. P.O. Box 185 Bloomington MD 21523"
  },
  {
    "lookup": 12115,
    "name": "G.W. Contracting",
    "phone": 3016165762,
    "address": "G.W. Contracting 5388 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 12170,
    "name": "Cristopher Gank",
    "phone": 3047892602,
    "address": "Cristopher Gank Rt. 2 Terra Alta WV 26764"
  },
  {
    "lookup": 12175,
    "name": "Jeff Gank",
    "phone": "",
    "address": "Jeff Gank 938 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 12200,
    "name": "Garrett Automotive Co.",
    "phone": 3013876148,
    "address": "Garrett Automotive Co. 18582 Garrett Hwy. Oakland MD 21550"
  },
  {
    "lookup": 12227,
    "name": "G.C. Comm. Action Housing Dept",
    "phone": 3013349431,
    "address": "G.C. Comm. Action Housing Dept 104 E. Center Street Oakland MD 21550"
  },
  {
    "lookup": 12230,
    "name": "Garrett County Home Health",
    "phone": 3013348113,
    "address": "Garrett County Home Health"
  },
  {
    "lookup": 12250,
    "name": "Garrett Community College",
    "phone": 3013876666,
    "address": "Garrett Community College P.O.Box 151 Mchenry MD 21541"
  },
  {
    "lookup": 12300,
    "name": "Garrett County Board Of Educat",
    "phone": 3013348924,
    "address": "Garrett County Board Of Educat 40 S 2Nd St Oakland MD 21550"
  },
  {
    "lookup": 12310,
    "name": "Garrett Co Bd Of Ed Fns",
    "phone": 3013348918,
    "address": "Garrett Co Bd Of Ed Fns 770 Dennett Rd Oakland MD 21550"
  },
  {
    "lookup": 12320,
    "name": "Garrett Co Facilities & Man",
    "phone": 3013341928,
    "address": "Garrett Co Facilities & Man 203 S 4th St Rm 211 Oakland MD 21550"
  },
  {
    "lookup": 12325,
    "name": "Garrett County Health Dept.",
    "phone": 3013348116,
    "address": "Garrett County Health Dept. 2008 Maryland Highway Oakland MD 21550"
  },
  {
    "lookup": 12350,
    "name": "Garrett Co. Memorial Hospital",
    "phone": 3015334000,
    "address": "Garrett Co. Memorial Hospital 251 N. Fourth St. Oakland MD 21550"
  },
  {
    "lookup": 12375,
    "name": "Garrett County Office Of Solid",
    "phone": 3013870322,
    "address": "Garrett County Office Of Solid 3118 Oakland Sang Run Rd Oakland MD 21550"
  },
  {
    "lookup": 12400,
    "name": "Garrett County Roads",
    "phone": 3013341510,
    "address": "Garrett County Roads 2008 Maryland Hwy Public Service Center- Suite 3 Oakland MD 21550"
  },
  {
    "lookup": 12500,
    "name": "G.C. Sanitary District, Inc.",
    "phone": 3013346976,
    "address": "G.C. Sanitary District, Inc. 2008 Maryland Hwy, Suite 2 Shop 301-334-8382 Mt Lake Park MD 21550"
  },
  {
    "lookup": 12600,
    "name": "Garrett County Sheriffs Deprar",
    "phone": 3013341911,
    "address": "Garrett County Sheriffs Deprar 311 E Alder Street Oakland MD 21550"
  },
  {
    "lookup": 12660,
    "name": "Garrett Electric",
    "phone": 3013344577,
    "address": "Garrett Electric 258 N. 3Rd. Street Oakland MD 21550"
  },
  {
    "lookup": 12669,
    "name": "Garrett Equipment Rentals LLC",
    "phone": 3013349559,
    "address": "Garrett Equipment Rentals LLC 14599 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 12690,
    "name": "Garrett Medical Transport",
    "phone": 3013347900,
    "address": "Garrett Medical Transport P.O. Box 728 Oakland MD 21550"
  },
  {
    "lookup": 12700,
    "name": "Garrett Mine Supply",
    "phone": 3013344136,
    "address": "Garrett Mine Supply 104 Commerce Dr. Oakland MD 21550"
  },
  {
    "lookup": 12750,
    "name": "Garrett Transit Service",
    "phone": 3013349431,
    "address": "Garrett Transit Service 225 Francis Sanders Dr. W Oakland MD 21550"
  },
  {
    "lookup": 12775,
    "name": "Gary's Auto Sales",
    "phone": 3013345705,
    "address": "Gary's Auto Sales 4422 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 12780,
    "name": "Gary's Garage",
    "phone": 2403215664,
    "address": "Gary's Garage 28453 Garrett Hwy Accident MD 21520"
  },
  {
    "lookup": 12790,
    "name": "Gene's RePair Shop",
    "phone": 3047355226,
    "address": "Gene's RePair Shop 179 Horse Shoe Run Road Eglon WV 26716"
  },
  {
    "lookup": 12793,
    "name": "The George's Creek Co, Inc",
    "phone": 3016167955,
    "address": "The George's Creek Co, Inc C/O Greg Shockey 178 Glotfelty Dr Oakland MD 21550"
  },
  {
    "lookup": 12795,
    "name": "Getz's Mart",
    "phone": 3046937380,
    "address": "Getz's Mart Hc 76 Box 730 Mount Storm WV 26739"
  },
  {
    "lookup": 12800,
    "name": "Gib's Mechanical",
    "phone": "",
    "address": "Gib's Mechanical 8190 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 12950,
    "name": "Gingerich Concrete Constructio",
    "phone": 8146237485,
    "address": "Gingerich Concrete Constructio 5438 Bus Rt. 220 Bedford PA 15522"
  },
  {
    "lookup": 13000,
    "name": "Glade View Dairy Farm",
    "phone": "",
    "address": "Glade View Dairy Farm 795 Glade View Dairy Oakland MD 21550"
  },
  {
    "lookup": 13060,
    "name": "Glass Unlimited",
    "phone": 3013343900,
    "address": "Glass Unlimited P.O. Box 147 Oakland MD 21550"
  },
  {
    "lookup": 13100,
    "name": "Glotfelty Enterprises",
    "phone": 3013343911,
    "address": "Glotfelty Enterprises P.O. Box 438 Oakland MD 21550"
  },
  {
    "lookup": 13125,
    "name": "Johnathan James",
    "phone": 3016165749,
    "address": "Johnathan James 302 Shenandoah Ave Oakland MD 21550"
  },
  {
    "lookup": 13150,
    "name": "Glotfelty Lumber",
    "phone": 3013344100,
    "address": "Glotfelty Lumber 1063 Memorial Dr. Oakland MD 21550"
  },
  {
    "lookup": 13200,
    "name": "Mr. Mike Glotfelty",
    "phone": 3013348524,
    "address": "Mr. Mike Glotfelty 150 Turkey Neck Road Swanton MD 21561"
  },
  {
    "lookup": 13250,
    "name": "James Glotfelty",
    "phone": 3013342997,
    "address": "James Glotfelty Rt. 5 Oakland MD 21550"
  },
  {
    "lookup": 13400,
    "name": "Gnegy's Painting",
    "phone": 3013341238,
    "address": "Gnegy's Painting 1319 Stockslager Rd. Oakland MD 21550"
  },
  {
    "lookup": 13530,
    "name": "Mark Goff",
    "phone": 3014542060,
    "address": "Mark Goff Rt1 Box650 Rowlesburg WV 26425"
  },
  {
    "lookup": 13540,
    "name": "Golden Triangle Const Co Inc",
    "phone": 7248282800,
    "address": "Golden Triangle Const Co Inc 8555 Old Steubenville Pike Imperial PA 15126"
  },
  {
    "lookup": 13550,
    "name": "Jim Gordon",
    "phone": 3018953227,
    "address": "Jim Gordon 6226 National Pike Grantsville MD 21536"
  },
  {
    "lookup": 13600,
    "name": "Gorman V.F.D. Inc.",
    "phone": 3013341600,
    "address": "Gorman V.F.D. Inc. 270 Gorman Road Oakland MD 21550"
  },
  {
    "lookup": 13605,
    "name": "Gormania Garage",
    "phone": 3016161696,
    "address": "Gormania Garage 9192 George Washington Hwy Gormania WV 26720"
  },
  {
    "lookup": 13630,
    "name": "Grand Central Station",
    "phone": 3013343006,
    "address": "Grand Central Station 312 S. Third Street Oakland MD 21550"
  },
  {
    "lookup": 13635,
    "name": "Grant County Mulch Inc",
    "phone": 3047497451,
    "address": "Grant County Mulch Inc 181 Mulch Dr Petersburg WV 26847"
  },
  {
    "lookup": 13640,
    "name": "Grantsville Liquors",
    "phone": 3018953133,
    "address": "Grantsville Liquors P.O. Box 356 Grantsville MD 21536"
  },
  {
    "lookup": 13645,
    "name": "Grantsville Market",
    "phone": 3018955574,
    "address": "Grantsville Market P.O. Box 548 Grantsville MD 21536"
  },
  {
    "lookup": 13650,
    "name": "Grantsville Station",
    "phone": 3018955585,
    "address": "Grantsville Station 162 South Street Grantsville MD 21536"
  },
  {
    "lookup": 13660,
    "name": "Grantsville Truck & Trailer",
    "phone": 3018955356,
    "address": "Grantsville Truck & Trailer P.O. Box 693 Grantsville MD 21536"
  },
  {
    "lookup": 13775,
    "name": "Greenbrier Enterprise Inc",
    "phone": 3048664911,
    "address": "Greenbrier Enterprise Inc Rt. 1 Box 83 Davis WV 26260"
  },
  {
    "lookup": 13780,
    "name": "Green Things LLC.",
    "phone": 3013346007,
    "address": "Green Things LLC. P.O Box 224 Oakland MD 21550"
  },
  {
    "lookup": 13800,
    "name": "Greens Auto RePair",
    "phone": 3013344588,
    "address": "Greens Auto RePair 161 Monta Vista Road Oakland MD 21550"
  },
  {
    "lookup": 13825,
    "name": "Kelby Green",
    "phone": 3016163297,
    "address": "Kelby Green 161 Monta Vista Rd Oakland MD 21550"
  },
  {
    "lookup": 13925,
    "name": "Bill Green",
    "phone": 3012454385,
    "address": "Bill Green 3176 Dry Run Road Swanton MD 21561-9653"
  },
  {
    "lookup": 13975,
    "name": "Grimm Lumber Inc.",
    "phone": 3047896231,
    "address": "Grimm Lumber Inc. 78 Wood Rock Rd Terra Alta WV 26764"
  },
  {
    "lookup": 14000,
    "name": "John's Auto RePair",
    "phone": 3046985559,
    "address": "John's Auto RePair 55 Front St Terra Alta WV 26764"
  },
  {
    "lookup": 14100,
    "name": "John Groves RePair And Body Shop",
    "phone": 3013599716,
    "address": "John Groves RePair And Body Shop 334 High Crest Drive Swanton MD 21561"
  },
  {
    "lookup": 14150,
    "name": "Quitin L Guthie Jr",
    "phone": "",
    "address": "Quitin L Guthie Jr 1714 Underwood Rd Oakland MD 21550"
  },
  {
    "lookup": 14200,
    "name": "Red Guthrie",
    "phone": 3013349014,
    "address": "Red Guthrie 159 Kendall Road Oakland MD 21550"
  },
  {
    "lookup": 14250,
    "name": "The Republican",
    "phone": 3013343963,
    "address": "The Republican P.O. Box 326 Oakland MD 21550"
  },
  {
    "lookup": 14260,
    "name": "H & A Trucking, LLC",
    "phone": 3046148012,
    "address": "H & A Trucking, LLC 1582 Pierce Benbush Rd Thomas WV 26292"
  },
  {
    "lookup": 14265,
    "name": "H & H Trucking & Auto Body",
    "phone": 3042881215,
    "address": "H & H Trucking & Auto Body PO Box 78 Arthurdale WV 26520"
  },
  {
    "lookup": 14275,
    "name": "Hard Times Logging",
    "phone": 3013343789,
    "address": "Hard Times Logging 2247 Maryland Hwy. Mt Lake Park MD 21550"
  },
  {
    "lookup": 14520,
    "name": "Hamilton Farms",
    "phone": 3013349319,
    "address": "Hamilton Farms 24 Hamilton Way Oakland MD 21550"
  },
  {
    "lookup": 14530,
    "name": "Hanlin Performance",
    "phone": 3015336920,
    "address": "Hanlin Performance 309 Seneca Ave Oakland MD 21550"
  },
  {
    "lookup": 14600,
    "name": "Norman Hanline Excavating",
    "phone": 3013343955,
    "address": "Norman Hanline Excavating 1018 John Drive Oakland MD 21550"
  },
  {
    "lookup": 14605,
    "name": "Ray Hanline Excavating",
    "phone": 3013343017,
    "address": "Ray Hanline Excavating 358 Smith Drive Oakland MD 21550"
  },
  {
    "lookup": 14650,
    "name": "Hardesty Excavating",
    "phone": 3047353046,
    "address": "Hardesty Excavating 759 Stanley Hoover Rd. Terra Alta WV 26764"
  },
  {
    "lookup": 14700,
    "name": "Joe's Services",
    "phone": 3046988789,
    "address": "Joe's Services 5360 Stemple Ridge Rd. Aurora WV 26705"
  },
  {
    "lookup": 14800,
    "name": "BBt",
    "phone": 3013342629,
    "address": "BBt 2623 Bethlehem Road Oakland MD 21550"
  },
  {
    "lookup": 14850,
    "name": "Hardesty Logging",
    "phone": 3013342327,
    "address": "Hardesty Logging 330 Millstone Rd Crawford WV 26343"
  },
  {
    "lookup": 14950,
    "name": "Hartsell Logging Inc",
    "phone": 3016168687,
    "address": "Hartsell Logging Inc 2858 Maple Spring Hwy Eglon WV 26716"
  },
  {
    "lookup": 14975,
    "name": "Harris Pools",
    "phone": 3013343358,
    "address": "Harris Pools P.O. Box 3124 Oakland MD 21550"
  },
  {
    "lookup": 14980,
    "name": "Wade Harsh Farms",
    "phone": 3047356495,
    "address": "Wade Harsh Farms 740 Eglon Road Eglon WV 26716"
  },
  {
    "lookup": 15000,
    "name": "Lyvonne Harsh Farm",
    "phone": 3047356455,
    "address": "Lyvonne Harsh Farm 2119 Accident Rd Eglon WV 26716"
  },
  {
    "lookup": 15100,
    "name": "Harvey Trucking",
    "phone": 3013344166,
    "address": "Harvey Trucking 217 Mingo Ave Oakland MD 21550"
  },
  {
    "lookup": 15125,
    "name": "John Harvey",
    "phone": 3013342808,
    "address": "John Harvey 32 Audley Riley Rd. Oakland MD 21550"
  },
  {
    "lookup": 15150,
    "name": "PAul D. Harvey",
    "phone": 3013345801,
    "address": "PAul D. Harvey 291 Loch Deer Road Oakland MD 21550"
  },
  {
    "lookup": 15375,
    "name": "HaUser Trucking",
    "phone": 3013343645,
    "address": "HaUser Trucking 14782 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 15400,
    "name": "Hawk Bros. Logging",
    "phone": 3047498670,
    "address": "Hawk Bros. Logging Hc 72 Scherr WV 26729"
  },
  {
    "lookup": 15405,
    "name": "Hawkeye Services",
    "phone": 3047896286,
    "address": "Hawkeye Services 915 West State Ave. Terra Alta WV 26764"
  },
  {
    "lookup": 15425,
    "name": "Heeter Construction LLC",
    "phone": 3049273032,
    "address": "Heeter Construction LLC 513 Charleston Rd Spencer WV 25276"
  },
  {
    "lookup": 15450,
    "name": "Mr. George HeBB",
    "phone": 3013349492,
    "address": "Mr. George HeBB 1979 Table Rock Road Oakland MD 21550"
  },
  {
    "lookup": 15455,
    "name": "Jeffery HeBB",
    "phone": 2404427202,
    "address": "Jeffery HeBB 29 Haines Rd Oakland MD 21550"
  },
  {
    "lookup": 15470,
    "name": "Stuart Thayer",
    "phone": 3016166218,
    "address": "Stuart Thayer 3849 Underwood Rd Oakland MD 21550"
  },
  {
    "lookup": 15475,
    "name": "Theresa Helbig-Miller",
    "phone": 3012454320,
    "address": "Theresa Helbig-Miller 149 Englewood Lane Grantsville MD 21536"
  },
  {
    "lookup": 15500,
    "name": "Helbig's Garage",
    "phone": 3013340551,
    "address": "Helbig's Garage 1229 Garrett Road Oakland MD 21550"
  },
  {
    "lookup": 15600,
    "name": "Helbig's Rt 560 Carpet Shoppe",
    "phone": 3013349598,
    "address": "Helbig's Rt 560 Carpet Shoppe 7773 Gorman Road Oakland MD 21550"
  },
  {
    "lookup": 15650,
    "name": "Helbig's RePair Shop",
    "phone": 3013349012,
    "address": "Helbig's RePair Shop 5677 Hutton Rd. Oakland MD 21550"
  },
  {
    "lookup": 15660,
    "name": "Heritage Stone",
    "phone": 3044465218,
    "address": "Heritage Stone 518 Feathers Rd Elk Garden WV 26717"
  },
  {
    "lookup": 15670,
    "name": "Heritage Coal And Natural Resour",
    "phone": 8146347451,
    "address": "Heritage Coal And Natural Resour 550 Beagle Rd Rockwood PA 15557"
  },
  {
    "lookup": 15675,
    "name": "Herrington Manor State Park",
    "phone": 3013349180,
    "address": "Herrington Manor State Park 222 Herrington Lane Oakland MD 21550"
  },
  {
    "lookup": 15680,
    "name": "Hershman Auto Sales",
    "phone": 3013346100,
    "address": "Hershman Auto Sales 257 Oakland Dr. Oakland MD 21550"
  },
  {
    "lookup": 15700,
    "name": "Hershman Construction LLC",
    "phone": 3016169155,
    "address": "Hershman Construction LLC 116 Timber Falls Drive Oakland MD 21550"
  },
  {
    "lookup": 15725,
    "name": "Hi-Way Paving",
    "phone": 6148761700,
    "address": "Hi-Way Paving 4343 Weaver Court North PO Box 550 Hilliard Oh 43026"
  },
  {
    "lookup": 15730,
    "name": "Hi-Way Transport LLC",
    "phone": 6148761700,
    "address": "Hi-Way Transport LLC 4343 Weaver Court North PO Box 550 Hilliard Oh 43026"
  },
  {
    "lookup": 15740,
    "name": "Hickory Stables",
    "phone": 3016898120,
    "address": "Hickory Stables 414 Chaney Rd Lonaconing MD 21539"
  },
  {
    "lookup": 15750,
    "name": "High Mt. On/Off Road",
    "phone": 3013345060,
    "address": "High Mt. On/Off Road 12534 Garrett Hwy. Oakland MD 21550"
  },
  {
    "lookup": 15800,
    "name": "Hinebaugh's RePair",
    "phone": 3013349306,
    "address": "Hinebaugh's RePair 14 Charles Ln Deer Park MD 21550"
  },
  {
    "lookup": 15900,
    "name": "Holland Bros. Landscaping",
    "phone": 3015330253,
    "address": "Holland Bros. Landscaping 125 Evergreen Forest Dr. Oakland MD 21550"
  },
  {
    "lookup": 15910,
    "name": "Holland Electric",
    "phone": 3013877967,
    "address": "Holland Electric P.O Box 3030 Swanton MD 21561"
  },
  {
    "lookup": 15925,
    "name": "Holland Nursery",
    "phone": 3013348360,
    "address": "Holland Nursery 1354 Hutton Rd. Oakland MD 21550"
  },
  {
    "lookup": 15930,
    "name": "Holland Trucking LLC",
    "phone": "",
    "address": "Holland Trucking LLC 125Vevergreen Forest Drive Oakland MD 21550"
  },
  {
    "lookup": 15935,
    "name": "Hollada's Garage",
    "phone": 8146622807,
    "address": "Hollada's Garage P.O. Box 53 W. Salisbury PA 15562"
  },
  {
    "lookup": 15950,
    "name": "Hop's Shop",
    "phone": 3013348631,
    "address": "Hop's Shop 4407 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 15975,
    "name": "Hopemont Auto",
    "phone": 3047892352,
    "address": "Hopemont Auto 32882 Veterans Memorial Hwy Terra Alta WV 26764"
  },
  {
    "lookup": 15979,
    "name": "Hopemont Hospital",
    "phone": "",
    "address": "Hopemont Hospital 150 Hopemont Dr Terra Alta WV 26764"
  },
  {
    "lookup": 15987,
    "name": "Henry Hostutler",
    "phone": 3013346235,
    "address": "Henry Hostutler 96 Sanders Lane Oakland MD 21550"
  },
  {
    "lookup": 16000,
    "name": "Humberson Equipment & Building",
    "phone": 3043796211,
    "address": "Humberson Equipment & Building Route 3 Box 174A Bruceton Mills WV 26525"
  },
  {
    "lookup": 16200,
    "name": "Hutton Auto",
    "phone": 3013341712,
    "address": "Hutton Auto 464 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 16225,
    "name": "Hutzel Trucking",
    "phone": 3013348682,
    "address": "Hutzel Trucking 1231 Friendsville Addison Rd Friendsville MD 21531"
  },
  {
    "lookup": 16400,
    "name": "Industrial Service Contractors",
    "phone": 8004241980,
    "address": "Industrial Service Contractors P.O. Box 35051 Baltimore MD 21222"
  },
  {
    "lookup": 16425,
    "name": "Iron Horse Logging",
    "phone": 3013346911,
    "address": "Iron Horse Logging 81 Bethlehem Rd. Oakland MD 21550"
  },
  {
    "lookup": 16450,
    "name": "Irving's Upholstery & Fire Arm",
    "phone": 3013348873,
    "address": "Irving's Upholstery & Fire Arm 171 Wasgington Hwy. Oakland MD 21550"
  },
  {
    "lookup": 16525,
    "name": "JDK Logging LLC",
    "phone": 3013341527,
    "address": "JDK Logging LLC P.O. Box 2175 Oakland MD 21550"
  },
  {
    "lookup": 16535,
    "name": "JSJ Trucking",
    "phone": 3013349391,
    "address": "JSJ Trucking PO Box 712 Oakland MD 21550"
  },
  {
    "lookup": 16549,
    "name": "J & A Auto RePair",
    "phone": 3046983446,
    "address": "J & A Auto RePair 891 Cathedral Way Aurora WV 26705"
  },
  {
    "lookup": 16550,
    "name": "J & B Logging Inc.",
    "phone": 3016160362,
    "address": "J & B Logging Inc. 712 Sunshine Drive Mt Lake Park MD 21550"
  },
  {
    "lookup": 16650,
    "name": "J & J Choice",
    "phone": 8008343131,
    "address": "J & J Choice P.O. Box 86 Terra Alta WV 26764"
  },
  {
    "lookup": 16685,
    "name": "J & L Body Shop",
    "phone": 3016166000,
    "address": "J & L Body Shop 1028 Ross Ave. Friendsville MD 21531"
  },
  {
    "lookup": 16725,
    "name": "Iii C's Construction",
    "phone": 3013344509,
    "address": "Iii C's Construction 367 Snow Dump Mt. Rd. Oakland MD 21550"
  },
  {
    "lookup": 16750,
    "name": "J & L RePair Shop",
    "phone": 3013348309,
    "address": "J & L RePair Shop 1565 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 16800,
    "name": "J & R Texaco",
    "phone": 3013876093,
    "address": "J & R Texaco P.O. Box 435 Oakland Kitzmiller MD 21538"
  },
  {
    "lookup": 16805,
    "name": "J.B.E.A. Logging LLC",
    "phone": 3016169474,
    "address": "J.B.E.A. Logging LLC 574 Beitzel VAlley Dr Accident MD 21520"
  },
  {
    "lookup": 16807,
    "name": "JD Automotive",
    "phone": 3049403246,
    "address": "JD Automotive PO Box 781 Davis WV 26260"
  },
  {
    "lookup": 16810,
    "name": "J.D. Excavating LLC",
    "phone": 3013879144,
    "address": "J.D. Excavating LLC 392 Bray School Rd. Oakland MD 21550"
  },
  {
    "lookup": 16815,
    "name": "J.M. Contracting",
    "phone": 3016164681,
    "address": "J.M. Contracting 3783 Pleasant VAlley Rd. Oakland MD 21550"
  },
  {
    "lookup": 16850,
    "name": "Jim Jackson",
    "phone": 3018955481,
    "address": "Jim Jackson 11517 National Pike Grantsville MD 21536"
  },
  {
    "lookup": 16900,
    "name": "Bob James Excavating",
    "phone": 3015010056,
    "address": "Bob James Excavating 418 Mayberry Poling Rd. Swanton MD 21550"
  },
  {
    "lookup": 17000,
    "name": "Larry James Jr.",
    "phone": 3013348523,
    "address": "Larry James Jr. 302 Shenandoah Ave. Mt Lake Park MD 21550"
  },
  {
    "lookup": 17110,
    "name": "Jasco Fab. & Machine",
    "phone": 3013346272,
    "address": "Jasco Fab. & Machine 1404 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 17113,
    "name": "Jeff's Auto Body",
    "phone": 3046763042,
    "address": "Jeff's Auto Body 190 Power Station Hwy Mount Storm WV 26739"
  },
  {
    "lookup": 17115,
    "name": "Jeff's RePair",
    "phone": 3046987031,
    "address": "Jeff's RePair 5726 Cransville Rd Oakland MD 21550"
  },
  {
    "lookup": 17125,
    "name": "Jim's RePair Service",
    "phone": 3047895209,
    "address": "Jim's RePair Service Rt. 2 Box 54E1 Terra Alta WV 26764"
  },
  {
    "lookup": 17325,
    "name": "Johns Body Shop",
    "phone": 3013341534,
    "address": "Johns Body Shop 2301 Hutton Rd Oakland MD 21550"
  },
  {
    "lookup": 17400,
    "name": "Jones Brothers Logging",
    "phone": 3046937367,
    "address": "Jones Brothers Logging Rt1. Box 151-J 370 Jones Hollow Elk Garden WV 26717"
  },
  {
    "lookup": 17500,
    "name": "Jones Trucking",
    "phone": 3046937080,
    "address": "Jones Trucking Rt. 1 Box 17 Elk Garden WV 26717"
  },
  {
    "lookup": 17625,
    "name": "Junk To Jewel",
    "phone": 3015330552,
    "address": "Junk To Jewel 23 Chadderton School Rd Oakland MD 21550"
  },
  {
    "lookup": 17630,
    "name": "Jukebox's Auto RePair",
    "phone": 3016166975,
    "address": "Jukebox's Auto RePair 8630 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 17650,
    "name": "Mr. Jim Junkins",
    "phone": 3046937130,
    "address": "Mr. Jim Junkins P.O. Box 134 Mt Storm WV 26739"
  },
  {
    "lookup": 17750,
    "name": "Dept Juvenile Services Youth",
    "phone": 3017221600,
    "address": "Dept Juvenile Services Youth 1 James Day Cumberland MD 21502"
  },
  {
    "lookup": 17760,
    "name": "Greg Kamp Excavating",
    "phone": 3018953552,
    "address": "Greg Kamp Excavating 539 Chaney Rd. Lonaconing MD 21539"
  },
  {
    "lookup": 17810,
    "name": "Kamp Transport",
    "phone": 3016974129,
    "address": "Kamp Transport 47 Broadwater Cementary Rd Swanton MD 21561"
  },
  {
    "lookup": 17820,
    "name": "Keith Shaffers RePair",
    "phone": 3013341853,
    "address": "Keith Shaffers RePair 3015 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 17840,
    "name": "Keplinger Services LLC",
    "phone": 3048136282,
    "address": "Keplinger Services LLC 186 Energy Way Gormania WV 26720"
  },
  {
    "lookup": 17865,
    "name": "J.H. Fletcher & Co.",
    "phone": 3045257811,
    "address": "J.H. Fletcher & Co. 402 High St. Huntington WV 25722"
  },
  {
    "lookup": 17866,
    "name": "K & W Cleaning",
    "phone": 3013340677,
    "address": "K & W Cleaning 212 PAul Friend Rd. Oakland MD 21550"
  },
  {
    "lookup": 17867,
    "name": "Jim Kenner RePair Shop",
    "phone": 3013345229,
    "address": "Jim Kenner RePair Shop P.O. Box 2105 Mt Lake Park MD 21550"
  },
  {
    "lookup": 17869,
    "name": "Keyser Carquest Auto Parts",
    "phone": 3047886666,
    "address": "Keyser Carquest Auto Parts 375 West PiEDMont St Keyser WV 26726"
  },
  {
    "lookup": 17875,
    "name": "Keystone Lime Company",
    "phone": 8146622711,
    "address": "Keystone Lime Company P.O. Box 278 Springs PA 15562"
  },
  {
    "lookup": 17900,
    "name": "Keystone Paving Inc.",
    "phone": 3017465087,
    "address": "Keystone Paving Inc. 19746 Garrett Hwy. Oakland MD 21550"
  },
  {
    "lookup": 17920,
    "name": "Tommy King",
    "phone": "",
    "address": "Tommy King 412 I Street Oakland MD 21550"
  },
  {
    "lookup": 17925,
    "name": "Kinsinger's Central Tractor",
    "phone": 3013344129,
    "address": "Kinsinger's Central Tractor 175 PAul Friend Road Oakland MD 21550"
  },
  {
    "lookup": 17950,
    "name": "PAul Kinsinger",
    "phone": 3013348117,
    "address": "PAul Kinsinger 3941 Pleasant VAlley Rd. Oakland MD 21550"
  },
  {
    "lookup": 18000,
    "name": "Darrell Kitzmiller",
    "phone": 3013342880,
    "address": "Darrell Kitzmiller P.O. Box 2224 Mt Lake Park MD 21550"
  },
  {
    "lookup": 18050,
    "name": "Kessel Mulch Co. Inc.",
    "phone": 3047883371,
    "address": "Kessel Mulch Co. Inc. 66 Cut Off Rd Keyser WV 26726"
  },
  {
    "lookup": 18160,
    "name": "Terry King",
    "phone": 3013341121,
    "address": "Terry King 182 King-Reiss Lane Deer Park MD 21550"
  },
  {
    "lookup": 18185,
    "name": "Zane Kisner",
    "phone": 3016166598,
    "address": "Zane Kisner 231 Hunters Drive Oakland MD 21550"
  },
  {
    "lookup": 18200,
    "name": "Kitzmiller Fire Dept. Inc.",
    "phone": 3014533392,
    "address": "Kitzmiller Fire Dept. Inc. P.O Box 438 Kitzmiller MD 21538"
  },
  {
    "lookup": 18275,
    "name": "Rusty A. Kitzmiller",
    "phone": 3016937443,
    "address": "Rusty A. Kitzmiller Hc 76 Box 302 Mt Storm WV 26739"
  },
  {
    "lookup": 18300,
    "name": "Kitzmiller Garage",
    "phone": 3046937723,
    "address": "Kitzmiller Garage PO Box 47 Mount Storm WV 26739"
  },
  {
    "lookup": 18375,
    "name": "Dennis Knotts",
    "phone": 3013343436,
    "address": "Dennis Knotts 11 Locomotive Ave Gormania WV 26720"
  },
  {
    "lookup": 18425,
    "name": "Knotts Lumber",
    "phone": "",
    "address": "Knotts Lumber 4250 Kitzmiller Rd. Kitzmiller MD 21538"
  },
  {
    "lookup": 18465,
    "name": "Robert Kuhn",
    "phone": 3046937035,
    "address": "Robert Kuhn 8351 Union Hwy. Apt. 7 Mt Storm WV 26739"
  },
  {
    "lookup": 18468,
    "name": "Tom Kuhn-Funland",
    "phone": "",
    "address": "Tom Kuhn-Funland 409 Fairway Drive Oakland MD 21550"
  },
  {
    "lookup": 18480,
    "name": "Lakefront Enterprises",
    "phone": 3013870115,
    "address": "Lakefront Enterprises 23 Mellinger Road Swanton MD 21561"
  },
  {
    "lookup": 18595,
    "name": "Lakeview Auto Parts",
    "phone": 3013877228,
    "address": "Lakeview Auto Parts P.O. Box 359 Mchenry MD 21541"
  },
  {
    "lookup": 18600,
    "name": "Lakeview Automotive",
    "phone": 3016166701,
    "address": "Lakeview Automotive 4757 Sang Run Rd. Mchenry MD 21541"
  },
  {
    "lookup": 18650,
    "name": "Mr. Gene E. Lambert",
    "phone": 3013342562,
    "address": "Mr. Gene E. Lambert 6 Callicoat Road Oakland MD 21550"
  },
  {
    "lookup": 18675,
    "name": "Gary Lambka RePair",
    "phone": 3046937860,
    "address": "Gary Lambka RePair P.O. Box 106 Mt Storm WV 26739"
  },
  {
    "lookup": 18677,
    "name": "Jennifer Lambka",
    "phone": 3047895108,
    "address": "Jennifer Lambka Rr 1 Box 424 Corinth WV 26764"
  },
  {
    "lookup": 18685,
    "name": "Land Design LLC",
    "phone": 3013348431,
    "address": "Land Design LLC 198 Apple Blossom Lane Oakland MD 21550"
  },
  {
    "lookup": 18686,
    "name": "Charles Langford",
    "phone": "",
    "address": "Charles Langford PO Box 294 Rowlesburg WV 26425"
  },
  {
    "lookup": 18690,
    "name": "Lantz Dairy",
    "phone": 3047356835,
    "address": "Lantz Dairy 705 Shillingburg Rd. Aurora WV 26705"
  },
  {
    "lookup": 18695,
    "name": "Greg Lawson",
    "phone": 3016162505,
    "address": "Greg Lawson 105 Louvina Dr Lonaconing MD 21539"
  },
  {
    "lookup": 18700,
    "name": "Laoc Corporation",
    "phone": 3013344607,
    "address": "Laoc Corporation 3388 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 18950,
    "name": "Mike Lawson",
    "phone": "",
    "address": "Mike Lawson 2439 Old Morgantown Rd. W Friendsville MD 21531"
  },
  {
    "lookup": 19000,
    "name": "Layman's Body Shop",
    "phone": 3047353425,
    "address": "Layman's Body Shop 1314 Cathedral Way Aurora WV 26705"
  },
  {
    "lookup": 19015,
    "name": "Gary Layman",
    "phone": "",
    "address": "Gary Layman 246 Old New Germany Rd Grantsville MD 21536"
  },
  {
    "lookup": 19200,
    "name": "Lee's Body Shop",
    "phone": 3014533467,
    "address": "Lee's Body Shop 671 Pee Wee Rd. Kitzmiller MD 21538"
  },
  {
    "lookup": 19385,
    "name": "Jeff Lewis",
    "phone": "",
    "address": "Jeff Lewis 2011 Garrett Road Oakland MD 21550"
  },
  {
    "lookup": 19390,
    "name": "Lewis & Burge, Inc.",
    "phone": 3047892611,
    "address": "Lewis & Burge, Inc. PO Box 106 Terra Alta WV 26764"
  },
  {
    "lookup": 19400,
    "name": "Lewis & Sons",
    "phone": 3013341485,
    "address": "Lewis & Sons 399 Kings Run Rd. Oakland MD 21550"
  },
  {
    "lookup": 19450,
    "name": "Lewis Used Cars",
    "phone": 3013342992,
    "address": "Lewis Used Cars 940 Pysell Crosscut Rd Oakland MD 21550"
  },
  {
    "lookup": 19451,
    "name": "Lewis Farm",
    "phone": "",
    "address": "Lewis Farm 7582 Saltlick Rd Terra Alta WV 26764"
  },
  {
    "lookup": 19500,
    "name": "Bill Lewis",
    "phone": "",
    "address": "Bill Lewis 202 Sander Lane Oakland MD 21550"
  },
  {
    "lookup": 19515,
    "name": "Gary L. Lewis",
    "phone": 3013348691,
    "address": "Gary L. Lewis P.O. Box 472 Oakland MD 21550"
  },
  {
    "lookup": 19520,
    "name": "Jamie L. Lewis",
    "phone": 3013346918,
    "address": "Jamie L. Lewis 318 Allegany Drive Oakland MD 21550"
  },
  {
    "lookup": 19525,
    "name": "Mr. Ronald Lewis",
    "phone": 3016162625,
    "address": "Mr. Ronald Lewis 1515 Steyer Mine Road Oakland MD 21550"
  },
  {
    "lookup": 19540,
    "name": "Link Resources Inc.",
    "phone": 3046937885,
    "address": "Link Resources Inc. C/O North Branch Operatio Bayard WV 26707"
  },
  {
    "lookup": 19541,
    "name": "Linsco",
    "phone": 3013877181,
    "address": "Linsco 19139 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 19542,
    "name": "Liberty Motorsports",
    "phone": 3048138028,
    "address": "Liberty Motorsports 350 Hiiltop Ave Keyser WV 26726"
  },
  {
    "lookup": 19545,
    "name": "Lipscomb's Lawn Products",
    "phone": 3047353017,
    "address": "Lipscomb's Lawn Products 306 Steiner Country Lane Eglon WV 26716"
  },
  {
    "lookup": 19547,
    "name": "Little Joe's Contracting",
    "phone": 3013349536,
    "address": "Little Joe's Contracting 778 Old Crellin Rd. Oakland MD 21550"
  },
  {
    "lookup": 19550,
    "name": "Little Mountain Enterprises",
    "phone": 3013342552,
    "address": "Little Mountain Enterprises 340 Lady Slipper Lane Oakland MD 21550"
  },
  {
    "lookup": 19600,
    "name": "Loch Lynn Service Center",
    "phone": 3013341706,
    "address": "Loch Lynn Service Center 5 West 3Rd Ave. Loch Lynn MD 21550"
  },
  {
    "lookup": 19625,
    "name": "Robert Lockmiller",
    "phone": 3013341726,
    "address": "Robert Lockmiller 5626 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 19700,
    "name": "Lohr Distributors",
    "phone": 3013343409,
    "address": "Lohr Distributors 320 South Eighth Street Oakland MD 21550"
  },
  {
    "lookup": 19750,
    "name": "Ed Lottig Garage",
    "phone": 8146624238,
    "address": "Ed Lottig Garage 733 Saint PAul Rd. Meyersdale PA 15552"
  },
  {
    "lookup": 19755,
    "name": "Eddie's Auto Moblie Detail",
    "phone": 3013382372,
    "address": "Eddie's Auto Moblie Detail 15517 Shamrock Rd Cumberland MD 21502"
  },
  {
    "lookup": 19758,
    "name": "Edwards Construction",
    "phone": 3016166465,
    "address": "Edwards Construction 2023 Fingerboard Rd Oakland MD 21550"
  },
  {
    "lookup": 19760,
    "name": "EDM Trucking",
    "phone": 2403211970,
    "address": "EDM Trucking 1321 White Church Road Oakland MD 21550"
  },
  {
    "lookup": 19775,
    "name": "Long Branch U Haul",
    "phone": 3013344533,
    "address": "Long Branch U Haul 1501 Maryland Hwy Oakland MD 21550"
  },
  {
    "lookup": 19800,
    "name": "Les Taylor Small Engine RePair",
    "phone": 3046937039,
    "address": "Les Taylor Small Engine RePair Hc 76 Box 703 Mt Storm WV 26739"
  },
  {
    "lookup": 20025,
    "name": "Lucas Landscaping",
    "phone": 3013343069,
    "address": "Lucas Landscaping 846 Jasper Riley Rd. Oakland MD 21550"
  },
  {
    "lookup": 20045,
    "name": "Maid To Sparkle",
    "phone": 2403215483,
    "address": "Maid To Sparkle 915 State St Kitzmiller MD 21538"
  },
  {
    "lookup": 20050,
    "name": "Maryland Forest Service",
    "phone": 3017772137,
    "address": "Maryland Forest Service 3 Pershing St. Cumberland MD 21502"
  },
  {
    "lookup": 20100,
    "name": "Rob's Auto & Body Shop",
    "phone": 2403211871,
    "address": "Rob's Auto & Body Shop 388 West Liberty St. Oakland MD 21550"
  },
  {
    "lookup": 20125,
    "name": "Maryland DNR",
    "phone": 3013874111,
    "address": "Maryland DNR Deep Creek Lake R.A. Swanton MD 21561"
  },
  {
    "lookup": 20150,
    "name": "Maryland Environmental Service",
    "phone": "",
    "address": "Maryland Environmental Service 259 Najoles Rd Millersville MD 21108"
  },
  {
    "lookup": 20175,
    "name": "Maryland Minerals Inc.",
    "phone": 3013872300,
    "address": "Maryland Minerals Inc. 19746 Garrett Hwy. Oakland MD 21550"
  },
  {
    "lookup": 20200,
    "name": "BKN RePair",
    "phone": 3016163167,
    "address": "BKN RePair 6128 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 20225,
    "name": "Luke's Auto Clinic",
    "phone": 3047896906,
    "address": "Luke's Auto Clinic 203 West Highland Ave. Terra Alta WV 26764"
  },
  {
    "lookup": 20230,
    "name": "Mct Inc",
    "phone": 3048137413,
    "address": "Mct Inc Rt 5 Box 190 Keyser WV 26726"
  },
  {
    "lookup": 20233,
    "name": "M & J RePair Service LLC.",
    "phone": 3044465448,
    "address": "M & J RePair Service LLC. 1348 Bosley Rd Keyser WV 26726"
  },
  {
    "lookup": 20235,
    "name": "M & N Automotive",
    "phone": 3013340737,
    "address": "M & N Automotive P.O. Box 3127 Deer Park MD 21550"
  },
  {
    "lookup": 20240,
    "name": "M & S Stone Quarry",
    "phone": 3018955151,
    "address": "M & S Stone Quarry P.O. Box 357 Grantsville MD 21536"
  },
  {
    "lookup": 20275,
    "name": "Madigan's Auto Sales",
    "phone": 3013344817,
    "address": "Madigan's Auto Sales P.O. Box 3148 Deer Park MD 21550"
  },
  {
    "lookup": 20300,
    "name": "Manor Builders Supply Inc.",
    "phone": 3013342109,
    "address": "Manor Builders Supply Inc. 1375 Maryland Hwy Mt Lake Park MD 21550"
  },
  {
    "lookup": 20325,
    "name": "Maple Hurst Farm",
    "phone": 3047355879,
    "address": "Maple Hurst Farm 524 Gnegy Church Rd. Eglon WV 26716"
  },
  {
    "lookup": 20350,
    "name": "Maple Lane Nursery",
    "phone": 3014533385,
    "address": "Maple Lane Nursery 373 Short Run Road Kitzmiller MD 21538"
  },
  {
    "lookup": 20375,
    "name": "Marple Mulching LLC",
    "phone": 3013342941,
    "address": "Marple Mulching LLC 519 Lemoye King Rd Oakland MD 21550"
  },
  {
    "lookup": 20400,
    "name": "Margroff Brothers",
    "phone": 3018268514,
    "address": "Margroff Brothers Route 2 Box 13 Accident MD 21520"
  },
  {
    "lookup": 20500,
    "name": "Mark's Body Shop",
    "phone": 2403210947,
    "address": "Mark's Body Shop 17255 Maryland Highway Swanton MD 21561"
  },
  {
    "lookup": 20525,
    "name": "Marked Solutions",
    "phone": 3047356382,
    "address": "Marked Solutions 1448 Cathedral Way Aurora WV 26705"
  },
  {
    "lookup": 20550,
    "name": "Markwood Preowned",
    "phone": 3017298090,
    "address": "Markwood Preowned 17201 Mcmullen Hwy Cumberland MD 21502"
  },
  {
    "lookup": 20700,
    "name": "Martin Auto Body",
    "phone": 3013342903,
    "address": "Martin Auto Body 2247 Hutton Rd. Oakland MD 21550"
  },
  {
    "lookup": 20780,
    "name": "M & W Transmission",
    "phone": "",
    "address": "M & W Transmission P.O. Box 2391 Mt Lake Park MD 21550"
  },
  {
    "lookup": 20790,
    "name": "Harry L. Martin Bus Account",
    "phone": 3013349095,
    "address": "Harry L. Martin Bus Account 9605 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 20800,
    "name": "Martin's Garage",
    "phone": 3046937751,
    "address": "Martin's Garage P.O.Box 256 Bayard WV 26707"
  },
  {
    "lookup": 20875,
    "name": "Martin's Used Parts",
    "phone": 3013343284,
    "address": "Martin's Used Parts 4906 Garrett Highwat Oakland MD 21550"
  },
  {
    "lookup": 20900,
    "name": "Myron Martin",
    "phone": 3013341813,
    "address": "Myron Martin Route 2 Box 2K Oakland MD 21550"
  },
  {
    "lookup": 20975,
    "name": "Maryland DNR-Wildlife&Heritage",
    "phone": 3013344255,
    "address": "Maryland DNR-Wildlife&Heritage 1728 Kings Run Road Oakland MD 21550"
  },
  {
    "lookup": 21000,
    "name": "Maryland State Highway Adminis",
    "phone": 3013342133,
    "address": "Maryland State Highway Adminis 3876 National Pike Accident MD 21520-9785"
  },
  {
    "lookup": 21025,
    "name": "Maryland State Police",
    "phone": 3013871101,
    "address": "Maryland State Police 67 Friendsville Rd Mchenry MD 21541"
  },
  {
    "lookup": 21040,
    "name": "Masters Farm",
    "phone": 3044549555,
    "address": "Masters Farm Rt. 1 Box 792 Rowlesburg WV 26425"
  },
  {
    "lookup": 21045,
    "name": "Mcclung Farms",
    "phone": 3019161413,
    "address": "Mcclung Farms 10117 Johns Drive Damascus MD 20872"
  },
  {
    "lookup": 21047,
    "name": "Tom Mcconnell Farm",
    "phone": 3046987007,
    "address": "Tom Mcconnell Farm 183 Hauger Knob Rd Terra Alta WV 26764"
  },
  {
    "lookup": 21050,
    "name": "Mcfarland RePair & Welding",
    "phone": 3046989622,
    "address": "Mcfarland RePair & Welding 105 Sanders St. Terra Alta WV 26764"
  },
  {
    "lookup": 21100,
    "name": "Dayton Mckenzie",
    "phone": 3016162962,
    "address": "Dayton Mckenzie 300 White Oak Lane Oakland MD 21550"
  },
  {
    "lookup": 21101,
    "name": "Dayton Mckenzie",
    "phone": 3016162962,
    "address": "Dayton Mckenzie 300 White Oak Lane Oakland MD 21550"
  },
  {
    "lookup": 21160,
    "name": "Mr. Clayton P. Miller",
    "phone": 3013342916,
    "address": "Mr. Clayton P. Miller 1230 Mansfield Road Oakland MD 21550"
  },
  {
    "lookup": 21190,
    "name": "Meadow Ridge Contracting Inc.",
    "phone": 3046783653,
    "address": "Meadow Ridge Contracting Inc. P.O. Box 50 Terra Alta WV 26764"
  },
  {
    "lookup": 21200,
    "name": "Mellinger RePair",
    "phone": 3013874600,
    "address": "Mellinger RePair 210 Four M Rd. Swanton MD 21561"
  },
  {
    "lookup": 21250,
    "name": "Mr. Randy Mellinger",
    "phone": 3013345180,
    "address": "Mr. Randy Mellinger 1207 Fingerboard Rd. Oakland MD 21550"
  },
  {
    "lookup": 21300,
    "name": "Homer Mellott",
    "phone": 3013876815,
    "address": "Homer Mellott 1375 Mellott Rd Oakland MD 21550"
  },
  {
    "lookup": 21360,
    "name": "Melrob Trucking Inc.",
    "phone": 3047355722,
    "address": "Melrob Trucking Inc. 169 Floyd Bolyard Drive Aurora WV 26705-8623"
  },
  {
    "lookup": 21375,
    "name": "Menges Trucking",
    "phone": 3018953444,
    "address": "Menges Trucking 4239 National Pike Grantsville MD 21536"
  },
  {
    "lookup": 21390,
    "name": "Mettiki Coal",
    "phone": "",
    "address": "Mettiki Coal 293 Table Rock Rd. Oakland MD 21550"
  },
  {
    "lookup": 21400,
    "name": "Mettiki Coal LLC",
    "phone": 8596856320,
    "address": "Mettiki Coal LLC PO Box 910850 Lexington Ky 40591"
  },
  {
    "lookup": 21401,
    "name": "Mettiki Coal LLC F Mine",
    "phone": 8596856320,
    "address": "Mettiki Coal LLC F Mine PO Box 910850 Lexington Ky 40591"
  },
  {
    "lookup": 21405,
    "name": "Mettiki Coal Filter",
    "phone": 3013343952,
    "address": "Mettiki Coal Filter 293 Tablerock Road Oakland MD 21550"
  },
  {
    "lookup": 21410,
    "name": "Mettiki Coal (Preston)",
    "phone": 8592247221,
    "address": "Mettiki Coal (Preston) Attn: Joy Upchurch 771 Corporate Drive Ste 1000 Lexington Ky 40503"
  },
  {
    "lookup": 21500,
    "name": "Mike's Auto & Body",
    "phone": 3016163511,
    "address": "Mike's Auto & Body 197 Hardesty Rd Kitzmiller MD 21538"
  },
  {
    "lookup": 21525,
    "name": "Micks Maintenance",
    "phone": 3013872587,
    "address": "Micks Maintenance PO Box 112 Swanton MD 21561"
  },
  {
    "lookup": 21550,
    "name": "R.J. Stone",
    "phone": 3013349695,
    "address": "R.J. Stone 2684 Garrett Rd Oakland MD 21550"
  },
  {
    "lookup": 21600,
    "name": "My-O-Tire",
    "phone": 3013342146,
    "address": "My-O-Tire 133 Weber Road Oakland MD 21550"
  },
  {
    "lookup": 21650,
    "name": "Mighty Distributors",
    "phone": 3013344816,
    "address": "Mighty Distributors 515 D Street Mt Lake Park MD 21550"
  },
  {
    "lookup": 21700,
    "name": "Mike's Body Shop",
    "phone": 3016169211,
    "address": "Mike's Body Shop 532 Dry Run Rd Swanton MD 21561"
  },
  {
    "lookup": 21800,
    "name": "Mike's RePair",
    "phone": 3013346086,
    "address": "Mike's RePair 4374 Maryland Hwy Oakland MD 21550"
  },
  {
    "lookup": 21850,
    "name": "Mill Bound Trucking LLC",
    "phone": 3047892803,
    "address": "Mill Bound Trucking LLC 64 Russ Deberry Rd Terra Alta WV 26764"
  },
  {
    "lookup": 21900,
    "name": "Ralph P. Miller",
    "phone": 3013344303,
    "address": "Ralph P. Miller 1734 Mason School Rd. Oakland MD 21550"
  },
  {
    "lookup": 21915,
    "name": "Ray Miller",
    "phone": 3016891260,
    "address": "Ray Miller 7973 Avilton-Lonaconing Road Lonaconing MD 21539"
  },
  {
    "lookup": 21920,
    "name": "David\"The Jake\" Miller",
    "phone": 2403213836,
    "address": "David\"The Jake\" Miller 5480 Hutton Rd Oakland MD 21550"
  },
  {
    "lookup": 21950,
    "name": "Marvin Miller",
    "phone": 3012454006,
    "address": "Marvin Miller 359 Smith Road Grantsville MD 21536"
  },
  {
    "lookup": 21965,
    "name": "Miller's Welding Inc.",
    "phone": 3016898108,
    "address": "Miller's Welding Inc. 7945 Avilton-Lonaconing Rd. Lonaconing MD 21539"
  },
  {
    "lookup": 21966,
    "name": "Mills Enterprises LLC",
    "phone": "",
    "address": "Mills Enterprises LLC 1803 Potomac Camp Rd Oakland MD 21550"
  },
  {
    "lookup": 21968,
    "name": "Mitch Body Shop",
    "phone": 3047881305,
    "address": "Mitch Body Shop Rt. 1 Box 131 Keyser WV 26726"
  },
  {
    "lookup": 21970,
    "name": "Milro Services, Inc.",
    "phone": 3013342128,
    "address": "Milro Services, Inc. P.O. Box 2367 Oakland MD 21550"
  },
  {
    "lookup": 21974,
    "name": "Micheal Moon",
    "phone": 3013590135,
    "address": "Micheal Moon 1779 Savage River Road Swanton MD 21561"
  },
  {
    "lookup": 21975,
    "name": "Moonie's Auto RePair",
    "phone": 3013349113,
    "address": "Moonie's Auto RePair 2753 Steyer Mine Road Oakland MD 21550"
  },
  {
    "lookup": 21976,
    "name": "Montcroft Farms",
    "phone": 3047892519,
    "address": "Montcroft Farms 797 Potato Farm Rd Terra Alta WV 26764"
  },
  {
    "lookup": 5471,
    "name": "Moore Racing",
    "phone": 2403212165,
    "address": "Moore Racing 778 Old Crellin Rd Oakland MD 21550"
  },
  {
    "lookup": 21978,
    "name": "Moreland Trucking LLC",
    "phone": 3013345978,
    "address": "Moreland Trucking LLC 5992 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 21979,
    "name": "John Moreland",
    "phone": 3046937139,
    "address": "John Moreland PO Box 87 Mount Storm WV 26739"
  },
  {
    "lookup": 21980,
    "name": "Morgan Services",
    "phone": 3013341303,
    "address": "Morgan Services 397 Morgan's Lane Oakland MD 21550"
  },
  {
    "lookup": 21982,
    "name": "Morsaw Logging",
    "phone": 3015334401,
    "address": "Morsaw Logging 6128 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 21984,
    "name": "Mountaineer Contractors",
    "phone": "",
    "address": "Mountaineer Contractors PO Box 606 Kingwood WV 26537"
  },
  {
    "lookup": 21985,
    "name": "Mountain Enterprises Inc",
    "phone": 3013340695,
    "address": "Mountain Enterprises Inc PO Box 315 Mc Henry MD 21541"
  },
  {
    "lookup": 21987,
    "name": "Mountain Man Contracting",
    "phone": 3048132650,
    "address": "Mountain Man Contracting 16642 George Washington Hwy Mount Storm WV 26739"
  },
  {
    "lookup": 21990,
    "name": "Mountain View Farm",
    "phone": 2403212021,
    "address": "Mountain View Farm 1375 Blue Ribbon Rd Oakland MD 21550"
  },
  {
    "lookup": 22000,
    "name": "Mt. Counties Construction Co.",
    "phone": 3013876563,
    "address": "Mt. Counties Construction Co. 951 Foster Rd. Oakland MD 21550"
  },
  {
    "lookup": 22200,
    "name": "Mt. Grove V. F. D.",
    "phone": 3047356500,
    "address": "Mt. Grove V. F. D. 385 Maple Spring Hwy. Eglon WV 26716"
  },
  {
    "lookup": 22250,
    "name": "Mt. Lake Independent Baptist C",
    "phone": 3013343234,
    "address": "Mt. Lake Independent Baptist C 1005 Broadford Rd Oakland MD 21550"
  },
  {
    "lookup": 22300,
    "name": "Mt. Top Public Service Distric",
    "phone": 3046937667,
    "address": "Mt. Top Public Service Distric P.O. Box 236 Mt Storm WV 26739"
  },
  {
    "lookup": 22500,
    "name": "Mt. State Wire & Fence Co.",
    "phone": 3013348518,
    "address": "Mt. State Wire & Fence Co. 22266 George Washington Hwy Aurora WV 26705"
  },
  {
    "lookup": 22550,
    "name": "Mt. Storm V.F.D. Inc.",
    "phone": 3046937157,
    "address": "Mt. Storm V.F.D. Inc. P.O. Box 14 Mt Storm WV 26739"
  },
  {
    "lookup": 22650,
    "name": "Mt. Top Farms",
    "phone": 3047356951,
    "address": "Mt. Top Farms Rt. 1 Box 205 Aurora WV 26705"
  },
  {
    "lookup": 22675,
    "name": "Mt. Top Garage",
    "phone": 3046937075,
    "address": "Mt. Top Garage Rt 1 Box 227 B Elk Garden WV 26717"
  },
  {
    "lookup": 22677,
    "name": "Mt. Top Glass",
    "phone": 3013343050,
    "address": "Mt. Top Glass P.O. Box 442 Oakland MD 21550"
  },
  {
    "lookup": 22680,
    "name": "Mt. Top Mowers",
    "phone": 3013340728,
    "address": "Mt. Top Mowers 411 M Street Oakland MD 21550"
  },
  {
    "lookup": 22700,
    "name": "Mt. Top Paving",
    "phone": 3013876604,
    "address": "Mt. Top Paving 16617 Garrett Hwy. Oakland MD 21550"
  },
  {
    "lookup": 22710,
    "name": "Mt. Top Seal Coating",
    "phone": 3013342831,
    "address": "Mt. Top Seal Coating 53 Bird Avenue Oakland MD 21550"
  },
  {
    "lookup": 22715,
    "name": "Mt. Top Tree Farm",
    "phone": 3013344896,
    "address": "Mt. Top Tree Farm 398 Harley Lane Oakland MD 21550"
  },
  {
    "lookup": 22720,
    "name": "Mt VAlley Farm",
    "phone": 3047353612,
    "address": "Mt VAlley Farm 505 Shumaker-Cole Rd Eglon WV 26716"
  },
  {
    "lookup": 22725,
    "name": "Mt. View Farms",
    "phone": 2403212021,
    "address": "Mt. View Farms 1375 Blue Ribbon Rd. Oakland MD 21550"
  },
  {
    "lookup": 22750,
    "name": "Mt. Villa Associates",
    "phone": 3013343568,
    "address": "Mt. Villa Associates P.O. Box 522 Oakland MD 21550"
  },
  {
    "lookup": 22800,
    "name": "Mr. Jeff Muenchow",
    "phone": 3013879305,
    "address": "Mr. Jeff Muenchow 17848 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 22900,
    "name": "Ball Pre-Owned Auto",
    "phone": 3047892147,
    "address": "Ball Pre-Owned Auto PO Box 1 Terra Alta WV 26764"
  },
  {
    "lookup": 22920,
    "name": "Murphy's Garage",
    "phone": 3016164628,
    "address": "Murphy's Garage PO Box 90 Gormania WV 26720"
  },
  {
    "lookup": 22935,
    "name": "Mustang Express",
    "phone": 3013341188,
    "address": "Mustang Express 18140 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 22950,
    "name": "Herbert Myers Inc.",
    "phone": 3014533383,
    "address": "Herbert Myers Inc. Box 1261 Kitzmiller MD 21538"
  },
  {
    "lookup": 22955,
    "name": "Myers & Son Trucking",
    "phone": 3047353410,
    "address": "Myers & Son Trucking 6039 Stemple Ridge Rd Aurora WV 26705-8139"
  },
  {
    "lookup": 22981,
    "name": "National Salvage & Service",
    "phone": 8123399000,
    "address": "National Salvage & Service PO Box 300 Clear Creek In 47426"
  },
  {
    "lookup": 22990,
    "name": "Nature's Own Landscaping",
    "phone": 3013879370,
    "address": "Nature's Own Landscaping 6936 Sang Run Rd. Mchenry MD 21541"
  },
  {
    "lookup": 23000,
    "name": "Nayburlee RePair",
    "phone": 3012454384,
    "address": "Nayburlee RePair 11411 Bittinger Road Bittinger MD 21522"
  },
  {
    "lookup": 23050,
    "name": "A.D. Naylor's Contracting",
    "phone": 3013343934,
    "address": "A.D. Naylor's Contracting 32 S. Third St. Oakland MD 21550"
  },
  {
    "lookup": 23055,
    "name": "Nazelrod Excavating",
    "phone": 3047896835,
    "address": "Nazelrod Excavating 358 Sanders St. Terra Alta WV 26764"
  },
  {
    "lookup": 23060,
    "name": "Potomac Garrett State Forest",
    "phone": 3013345797,
    "address": "Potomac Garrett State Forest 1431 Potomac Camp Road Oakland MD 21550"
  },
  {
    "lookup": 23070,
    "name": "Mikey Nichols",
    "phone": 2406752429,
    "address": "Mikey Nichols 9169 George Washington Hwy PO Box 7 Gormania WV 26720"
  },
  {
    "lookup": 23075,
    "name": "Don Nine Auto",
    "phone": 3016970777,
    "address": "Don Nine Auto 13229 Garrett Hwy #2 Oakland MD 21550"
  },
  {
    "lookup": 23080,
    "name": "Nelson Limited",
    "phone": 3044634313,
    "address": "Nelson Limited PO Box 298 Thomas WV 26292"
  },
  {
    "lookup": 23100,
    "name": "Niner Construction",
    "phone": 3013874087,
    "address": "Niner Construction Route 4 Box 4980 Oakland MD 21550"
  },
  {
    "lookup": 23120,
    "name": "Roger & Cindy Newman",
    "phone": 8144426505,
    "address": "Roger & Cindy Newman 307 Maybury Lane Swanton MD 21561"
  },
  {
    "lookup": 23125,
    "name": "Newman & Sons",
    "phone": 3013344605,
    "address": "Newman & Sons 7084 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 23165,
    "name": "Noland Company Vrdc/I",
    "phone": 7579289000,
    "address": "Noland Company Vrdc/I 80 29th Street Newport News VA 23607"
  },
  {
    "lookup": 23170,
    "name": "Norm Guthrie",
    "phone": 3013342200,
    "address": "Norm Guthrie 223 Deerfield Dr. Deer Park MD 21550"
  },
  {
    "lookup": 23225,
    "name": "North Glade Inn",
    "phone": 3013873373,
    "address": "North Glade Inn 184 North Glade Rd Swanton MD 21561"
  },
  {
    "lookup": 23300,
    "name": "Action Towing",
    "phone": 3016161683,
    "address": "Action Towing 3773 Maryland Hwy Oakland MD 21550"
  },
  {
    "lookup": 23301,
    "name": "Nu-Finish Collision Center",
    "phone": 3013344727,
    "address": "Nu-Finish Collision Center 1470 Maryland Hwy Oakland MD 21550"
  },
  {
    "lookup": 23350,
    "name": "Nu-Image",
    "phone": 3015010029,
    "address": "Nu-Image 320 Dawson Ave. Oakland MD 21550"
  },
  {
    "lookup": 23400,
    "name": "Nuway Interiors",
    "phone": 3013349275,
    "address": "Nuway Interiors 31 Commerce Drive Oakland MD 21550-9605"
  },
  {
    "lookup": 23600,
    "name": "Crosco Trucking",
    "phone": 7248142085,
    "address": "Crosco Trucking 144 Keefer Rd Oakland MD 21550"
  },
  {
    "lookup": 23675,
    "name": "Oakland FFA",
    "phone": 3046783699,
    "address": "Oakland FFA 345 Oakland Drive Oakland MD 21550"
  },
  {
    "lookup": 23700,
    "name": "Oakland Oil Company",
    "phone": 3013342678,
    "address": "Oakland Oil Company PO Box 575 Oakland MD 21550"
  },
  {
    "lookup": 23725,
    "name": "Oakland Post Office",
    "phone": 3013343151,
    "address": "Oakland Post Office 22 South 2Nd Street Oakland MD 21550"
  },
  {
    "lookup": 23750,
    "name": "Oakland V.F.D.",
    "phone": 3013343535,
    "address": "Oakland V.F.D. PO Box 43 Oakland MD 21550"
  },
  {
    "lookup": 23775,
    "name": "Oakley C. White",
    "phone": 3016165829,
    "address": "Oakley C. White 212 N. 10Th St Oakland MD 21550"
  },
  {
    "lookup": 23800,
    "name": "Orions Belt",
    "phone": 3016165120,
    "address": "Orions Belt 328 Dawson Ave Oakland MD 21550"
  },
  {
    "lookup": 23850,
    "name": "Our's Auto Salvage",
    "phone": 3013348497,
    "address": "Our's Auto Salvage 3635 Hutton Rd. Oakland MD 21550"
  },
  {
    "lookup": 23900,
    "name": "Rick Palmer",
    "phone": 3013341246,
    "address": "Rick Palmer 1113 White Pine Circle Oakland MD 21550"
  },
  {
    "lookup": 23910,
    "name": "Par Matt Lanes",
    "phone": 3013343040,
    "address": "Par Matt Lanes 21 Lewis B. Naylor Dr. Oakland MD 21550"
  },
  {
    "lookup": 23912,
    "name": "Par Electrical Cont.",
    "phone": 3015330411,
    "address": "Par Electrical Cont. P.O. Box 2187 Mt Lake Park MD 21550"
  },
  {
    "lookup": 23915,
    "name": "John R. Parsons & Sons",
    "phone": 3047353352,
    "address": "John R. Parsons & Sons 465 Parsons Rd Aurora WV 26705"
  },
  {
    "lookup": 23925,
    "name": "Parsons Excavating",
    "phone": 3047353301,
    "address": "Parsons Excavating 636 Maple Spring Hwy Eglon WV 26716"
  },
  {
    "lookup": 23930,
    "name": "Parsons RePair",
    "phone": 3047353352,
    "address": "Parsons RePair 465 Parsons Rd Aurora WV 26705"
  },
  {
    "lookup": 23940,
    "name": "Woodrow W. PAse Iii",
    "phone": 3016168375,
    "address": "Woodrow W. PAse Iii Rr 2 Box 44C Tunnelton WV 26444-9617"
  },
  {
    "lookup": 24000,
    "name": "Patterson Boat Co. Inc.",
    "phone": 3013875000,
    "address": "Patterson Boat Co. Inc. 106 Round Beach Circle Dr Swanton MD 21561"
  },
  {
    "lookup": 24100,
    "name": "Patriot Chrysler Dodge Jeep",
    "phone": 3013347888,
    "address": "Patriot Chrysler Dodge Jeep 2499 Maryland Hwy Mt Lake Park MD 21550"
  },
  {
    "lookup": 24150,
    "name": "Jay K. PAugh",
    "phone": 3013342210,
    "address": "Jay K. PAugh 6128 Maryland Highway Oakland MD 21550"
  },
  {
    "lookup": 24200,
    "name": "Brandon PAugh",
    "phone": "",
    "address": "Brandon PAugh 4148 Pleasant VAlley Rd Oakland MD 21550"
  },
  {
    "lookup": 24230,
    "name": "Robert P. Thomas",
    "phone": 3013344744,
    "address": "Robert P. Thomas 2797 Broadford Road Oakland MD 21550"
  },
  {
    "lookup": 24265,
    "name": "Reuben Peachey Farms",
    "phone": 3013341350,
    "address": "Reuben Peachey Farms 1375 Blue Ribbon Rd Oakland MD 21550"
  },
  {
    "lookup": 24275,
    "name": "John Peck",
    "phone": 3013341497,
    "address": "John Peck 718 East Oak Street Oakland MD 21550"
  },
  {
    "lookup": 24300,
    "name": "Pennington Garage",
    "phone": 3013344938,
    "address": "Pennington Garage 8700 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 24400,
    "name": "Wolford Perando",
    "phone": 3013872404,
    "address": "Wolford Perando 398 Youghiogheny Path Oakland MD 21550"
  },
  {
    "lookup": 24450,
    "name": "Performance Chevrolet",
    "phone": 3044782831,
    "address": "Performance Chevrolet 224 Pennsylvania Ave. Parsons WV 26287"
  },
  {
    "lookup": 24500,
    "name": "Peters Fuel Corp.",
    "phone": 3013342936,
    "address": "Peters Fuel Corp. P.O. Box 119 Oakland MD 21550"
  },
  {
    "lookup": 24550,
    "name": "Perana's Customs",
    "phone": 3016162692,
    "address": "Perana's Customs 1159 Sand Flat Rd Oakland MD 21550"
  },
  {
    "lookup": 24600,
    "name": "Perry's Solid Waste Disposal",
    "phone": 3013341025,
    "address": "Perry's Solid Waste Disposal 151 Oakland Drive Oakland MD 21550"
  },
  {
    "lookup": 24625,
    "name": "Phillips Precast Concrete Inc.",
    "phone": "",
    "address": "Phillips Precast Concrete Inc. Hc 81 Box 53 Tunnelton WV 26444"
  },
  {
    "lookup": 24630,
    "name": "Pifer Auto RePair",
    "phone": 2404421345,
    "address": "Pifer Auto RePair 652 Hutton Rd Oakland MD 21550"
  },
  {
    "lookup": 24650,
    "name": "Pine Hill Tree Farm",
    "phone": 3013349704,
    "address": "Pine Hill Tree Farm 71 Myrl Wilt Lane Swanton MD 21561"
  },
  {
    "lookup": 24670,
    "name": "Phenix Technologies Inc.",
    "phone": 3017468118,
    "address": "Phenix Technologies Inc. 75 Speicher Drive Accident MD 21520"
  },
  {
    "lookup": 24695,
    "name": "Pine Hills GreenhoUse",
    "phone": 3047896329,
    "address": "Pine Hills GreenhoUse 653 Feather Rd Terra Alta WV 26764"
  },
  {
    "lookup": 24700,
    "name": "Pinetum Christmas Trees",
    "phone": 3013874588,
    "address": "Pinetum Christmas Trees 1039 Fort Hill Rd. Swanton MD 21561"
  },
  {
    "lookup": 24725,
    "name": "Pioneer Conveyor, LLC",
    "phone": 3044132500,
    "address": "Pioneer Conveyor, LLC 224 Moyer Rd Bruceton Mills WV 26525"
  },
  {
    "lookup": 24790,
    "name": "Pittman's Tree & Landscaping",
    "phone": 5406363392,
    "address": "Pittman's Tree & Landscaping P.O. Box 531 Front Royal VA 22630"
  },
  {
    "lookup": 25050,
    "name": "Potomac Construction",
    "phone": 3013343866,
    "address": "Potomac Construction P.O. Box 526 White Stone VA 22578"
  },
  {
    "lookup": 25055,
    "name": "Potomac Excavating",
    "phone": 2413214647,
    "address": "Potomac Excavating 157 Allen Marple Dr Oakland MD 21550"
  },
  {
    "lookup": 25060,
    "name": "Potomac-North Inc.",
    "phone": "",
    "address": "Potomac-North Inc. 1320 Memorial Dr PO Box 97 Oakland MD 21550"
  },
  {
    "lookup": 25061,
    "name": "Potomac North Inc",
    "phone": 3048132650,
    "address": "Potomac North Inc PO Box 114 Bayard WV 26707"
  },
  {
    "lookup": 25075,
    "name": "Powell's Auto Parts",
    "phone": 3014635671,
    "address": "Powell's Auto Parts 15815 Lwr Geo Creek Rd Lonaconing MD 21539"
  },
  {
    "lookup": 25100,
    "name": "Power Construction & Maintenan",
    "phone": 8043091046,
    "address": "Power Construction & Maintenan 107 Ogden Road Altavista VA 24517"
  },
  {
    "lookup": 25150,
    "name": "Precision Crane",
    "phone": 3012454491,
    "address": "Precision Crane 8027 Rock Lodge Rd. Accident MD 21520"
  },
  {
    "lookup": 25175,
    "name": "Preferred Lawn",
    "phone": 3013347870,
    "address": "Preferred Lawn PO Box 2356 Oakland MD 21550"
  },
  {
    "lookup": 25190,
    "name": "Premium Collision Center, LLC",
    "phone": 3047891133,
    "address": "Premium Collision Center, LLC 919 W State Ave Terra Alta WV 26764"
  },
  {
    "lookup": 25200,
    "name": "Preston Contractors Inc.",
    "phone": 3043292129,
    "address": "Preston Contractors Inc. P.O. Box 606 Kingwood WV 26537"
  },
  {
    "lookup": 25215,
    "name": "Preston Parts",
    "phone": 3043291110,
    "address": "Preston Parts 308 Kingston Road Kingwood WV 26537"
  },
  {
    "lookup": 25220,
    "name": "Pristine Auto Body",
    "phone": 3013343909,
    "address": "Pristine Auto Body PO Box 591 Oakland MD 21550"
  },
  {
    "lookup": 25225,
    "name": "Mike Pritt",
    "phone": 3013345824,
    "address": "Mike Pritt 139 Cherry Creek Lane Oakland MD 21550"
  },
  {
    "lookup": 25235,
    "name": "Pro-Clean",
    "phone": 3016164846,
    "address": "Pro-Clean P.O Box 602 Mc Henry MD 21541"
  },
  {
    "lookup": 25240,
    "name": "Code Green Constr. LLC",
    "phone": 3013344977,
    "address": "Code Green Constr. LLC 165 Mayhew In Rd Oakland MD 21550"
  },
  {
    "lookup": 25300,
    "name": "Dave Pysell",
    "phone": "",
    "address": "Dave Pysell Route 4 Box 386 Deer Park MD 21550"
  },
  {
    "lookup": 25425,
    "name": "R.A.M. Trucking, LLC.",
    "phone": 3013340509,
    "address": "R.A.M. Trucking, LLC. 1201 Gorman Rd. Oakland MD 21550"
  },
  {
    "lookup": 25440,
    "name": "Rd Logging",
    "phone": 3044411630,
    "address": "Rd Logging 288 Snowy Creek Rd Oakland MD 21550"
  },
  {
    "lookup": 25445,
    "name": "Rd Mckenzie Logging",
    "phone": 3016978847,
    "address": "Rd Mckenzie Logging 983 Beall School Rd Frostburg MD 21532"
  },
  {
    "lookup": 25450,
    "name": "RJ's",
    "phone": 3047355256,
    "address": "RJ's P.O. Box 2 Aurora WV 26705"
  },
  {
    "lookup": 25500,
    "name": "Rinker Construction LLC.",
    "phone": 3013344544,
    "address": "Rinker Construction LLC. 114 Keefer Rd. Oakland MD 21550"
  },
  {
    "lookup": 25570,
    "name": "R & J RePair Center Inc",
    "phone": 3047353888,
    "address": "R & J RePair Center Inc 23480 George Washington Hwy Aurora WV 26705"
  },
  {
    "lookup": 25573,
    "name": "rc Logging LLC",
    "phone": 3047353570,
    "address": "rc Logging LLC 2944 Aurora Pike Aurora WV 26705"
  },
  {
    "lookup": 25575,
    "name": "Jones Farm",
    "phone": 3013342859,
    "address": "Jones Farm 5243 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 25585,
    "name": "RJ Tractor RePair",
    "phone": 3016169952,
    "address": "RJ Tractor RePair 132 Artenis Harsh Dr Eglon WV 26716"
  },
  {
    "lookup": 25600,
    "name": "R & R Trucking",
    "phone": 3013343111,
    "address": "R & R Trucking 48 Allen Marple Dr. Oakland MD 21550-9354"
  },
  {
    "lookup": 25625,
    "name": "R & W Equipment",
    "phone": 3047355273,
    "address": "R & W Equipment P.O. Box 31 Aurora WV 26705"
  },
  {
    "lookup": 25640,
    "name": "Ry Angus Farms",
    "phone": 3013348870,
    "address": "Ry Angus Farms 617 Durr Rd. Oakland MD 21550"
  },
  {
    "lookup": 25650,
    "name": "J & J Body Shop Inc.",
    "phone": 3047892431,
    "address": "J & J Body Shop Inc. P.O. Box 83 Terra Alta WV 26764"
  },
  {
    "lookup": 25750,
    "name": "R.L.S. Enterprises",
    "phone": 3046937373,
    "address": "R.L.S. Enterprises P.O.Box 107 Bayard WV 26707"
  },
  {
    "lookup": 25755,
    "name": "RLB Services",
    "phone": 3042909637,
    "address": "RLB Services PO Box 163 Terra Alta WV 26764"
  },
  {
    "lookup": 25760,
    "name": "R.P.M. Construction",
    "phone": 3013347860,
    "address": "R.P.M. Construction 147-A Service Center Rd. Oakland MD 21550"
  },
  {
    "lookup": 25790,
    "name": "RWB Innovations Inc",
    "phone": 2404881053,
    "address": "RWB Innovations Inc 226 Francis Sanders Dr. Oakland MD 21550"
  },
  {
    "lookup": 25810,
    "name": "Rapidways Truck Leasing",
    "phone": 8147657859,
    "address": "Rapidways Truck Leasing P.O. Box 707 Clearfield PA 16830"
  },
  {
    "lookup": 25825,
    "name": "Randy's Body Shop",
    "phone": 3013341534,
    "address": "Randy's Body Shop 2299 Hutton Rd. Oakland MD 21550"
  },
  {
    "lookup": 25830,
    "name": "Ratliff Hardwoods LLC",
    "phone": 3045883738,
    "address": "Ratliff Hardwoods LLC 1499 Gnegy Church Rd Oakland MD 21550"
  },
  {
    "lookup": 26000,
    "name": "Ted Raynovich Iii",
    "phone": 3013341629,
    "address": "Ted Raynovich Iii 112 Round Beach Cir. Dr. Swanton MD 21561"
  },
  {
    "lookup": 26100,
    "name": "RBJ Trucking",
    "phone": 3047356306,
    "address": "RBJ Trucking 3203 Lantz Ridge Rd Aurora WV 26705"
  },
  {
    "lookup": 26200,
    "name": "Reckart Logging Co.",
    "phone": 3015330047,
    "address": "Reckart Logging Co. 971 Snowy Creek Rd Oakland MD 21550"
  },
  {
    "lookup": 26250,
    "name": "Jimmy Reckart",
    "phone": 3047896266,
    "address": "Jimmy Reckart 28562 Veterans Memorial Hwy Terra Alta WV 26764"
  },
  {
    "lookup": 26260,
    "name": "Recreational Ind-Wisp",
    "phone": 3013874911,
    "address": "Recreational Ind-Wisp 296 Marshill Rd. Mchenry MD 21541"
  },
  {
    "lookup": 26300,
    "name": "Red Rock Enterprises LLC",
    "phone": 3017465515,
    "address": "Red Rock Enterprises LLC 9659 Friendsville Rd Friendsville MD 21531"
  },
  {
    "lookup": 26400,
    "name": "Robert Ridder Excavating",
    "phone": 3013343939,
    "address": "Robert Ridder Excavating 430 South 8th Street Oakland MD 21550"
  },
  {
    "lookup": 26450,
    "name": "Darwin Robeson",
    "phone": 3016891721,
    "address": "Darwin Robeson 2281 Lower New Germany Rd Frostburg MD 21532"
  },
  {
    "lookup": 26460,
    "name": "Rocky Gap Resort/Evitts Resorts",
    "phone": 3017848482,
    "address": "Rocky Gap Resort/Evitts Resorts 12516 Pleasant VAlley Rd. Flintstone MD 21530"
  },
  {
    "lookup": 26470,
    "name": "Rocky Top Maintenace & RePair",
    "phone": 3016160261,
    "address": "Rocky Top Maintenace & RePair 763 Pysell Crosscut Rd Oakland MD 21550"
  },
  {
    "lookup": 26475,
    "name": "Russell Rodeheaver",
    "phone": "",
    "address": "Russell Rodeheaver P.O. Box 453 Oakland MD 21550"
  },
  {
    "lookup": 26600,
    "name": "Zane Riggleman",
    "phone": "",
    "address": "Zane Riggleman Rt. 2 Box 246C Horseshoe Run WV 26716"
  },
  {
    "lookup": 26700,
    "name": "Rigidply Rafters Of MD",
    "phone": 3013343977,
    "address": "Rigidply Rafters Of MD P.O. Box 177 Richland PA 17087-0177"
  },
  {
    "lookup": 26740,
    "name": "Austin Rodeheaver",
    "phone": 2403214106,
    "address": "Austin Rodeheaver 402 North 3Rd Street Oakland MD 21550"
  },
  {
    "lookup": 26800,
    "name": "Frazee Excavating",
    "phone": 3042904477,
    "address": "Frazee Excavating 1350 Cranesville Loop Rd. Terra Alta WV 26764"
  },
  {
    "lookup": 26900,
    "name": "Frazee's Mountain Top Mgt",
    "phone": 2403211936,
    "address": "Frazee's Mountain Top Mgt 4976 White Rock Rd Friendsville MD 21531"
  },
  {
    "lookup": 26910,
    "name": "Donald Robinson",
    "phone": 3046937278,
    "address": "Donald Robinson P.O. Box 102 Bayard WV 26707"
  },
  {
    "lookup": 26915,
    "name": "Don Rodeheaver RePair LLC",
    "phone": 3018953700,
    "address": "Don Rodeheaver RePair LLC 8736 National Pike P.O Box 22 Grantsville MD 21536"
  },
  {
    "lookup": 26920,
    "name": "Rohmac Inc",
    "phone": 3042592210,
    "address": "Rohmac Inc 1947 Wilson Corona Rd. Oakland MD 21550"
  },
  {
    "lookup": 26925,
    "name": "Roland Murphy Farm",
    "phone": 3012454170,
    "address": "Roland Murphy Farm 578 Murphy Lane Swanton MD 21561"
  },
  {
    "lookup": 26928,
    "name": "Rola Farms Inc.",
    "phone": 3013877801,
    "address": "Rola Farms Inc. 56 Beckman Rd. Swanton MD 21561"
  },
  {
    "lookup": 26929,
    "name": "Ron's Garage",
    "phone": 3013599309,
    "address": "Ron's Garage P.O. Box 34 Bloomington MD 21523"
  },
  {
    "lookup": 26950,
    "name": "Glenn Roth",
    "phone": 3013341247,
    "address": "Glenn Roth 400 Yough West Apt 4 Oakland MD 21550"
  },
  {
    "lookup": 26970,
    "name": "Rowlesburg Ambulance Service",
    "phone": 3044542080,
    "address": "Rowlesburg Ambulance Service P.O. Box 428 Rowlesburg WV 26425"
  },
  {
    "lookup": 26975,
    "name": "Rowlesburg Service Center",
    "phone": 3044549586,
    "address": "Rowlesburg Service Center P.O. Box 577 Rowlesburg WV 26425"
  },
  {
    "lookup": 26980,
    "name": "Rowlesburg Volunteer Fire Depa",
    "phone": 3044549551,
    "address": "Rowlesburg Volunteer Fire Depa P.O. Box 364 Rowlesburg WV 26425"
  },
  {
    "lookup": 26982,
    "name": "Roy's Auto Body Shop",
    "phone": 3047896298,
    "address": "Roy's Auto Body Shop 53 Roy Lane Terra Alta WV 26764"
  },
  {
    "lookup": 26985,
    "name": "Roy's Auto Sales",
    "phone": 3047892100,
    "address": "Roy's Auto Sales 605 W. State St Terra Alta WV 26764"
  },
  {
    "lookup": 26990,
    "name": "Roy's Garage",
    "phone": 3013877700,
    "address": "Roy's Garage 2208 Swanton Rd. Swanton MD 21561"
  },
  {
    "lookup": 27000,
    "name": "Rt. 24 Sales & Service",
    "phone": 3047355870,
    "address": "Rt. 24 Sales & Service Rt. Box 289-2 Horseshoe Run WV 26716"
  },
  {
    "lookup": 27010,
    "name": "Roberts Auto RePair",
    "phone": 3016167710,
    "address": "Roberts Auto RePair 1941 Garrett Rd Oakland MD 21550"
  },
  {
    "lookup": 27025,
    "name": "Robert's Towing",
    "phone": 3013344673,
    "address": "Robert's Towing 3983 Bethlehem Oakland MD 21550"
  },
  {
    "lookup": 27030,
    "name": "RS Painting LLC",
    "phone": 3013878545,
    "address": "RS Painting LLC 1408 Pine Hill Rd Swanton MD 21550"
  },
  {
    "lookup": 27050,
    "name": "Rush Excavating",
    "phone": 3013341399,
    "address": "Rush Excavating 808 Sandflat Road Oakland MD 21550"
  },
  {
    "lookup": 27125,
    "name": "S.C.& L.",
    "phone": 3013878387,
    "address": "S.C.& L. 413 Sisler Lane Friendsville MD 21531"
  },
  {
    "lookup": 27150,
    "name": "S & P Performance & RePair",
    "phone": 3013341654,
    "address": "S & P Performance & RePair 219 Loch Deer Road Oakland MD 21550"
  },
  {
    "lookup": 27185,
    "name": "Sams Agway",
    "phone": 3013343444,
    "address": "Sams Agway 451 South 8th St Oakland MD 21550"
  },
  {
    "lookup": 27200,
    "name": "Sam's Auto RePair",
    "phone": 3047893111,
    "address": "Sam's Auto RePair 211 East High Avenue Terra Alta WV 26764"
  },
  {
    "lookup": 27250,
    "name": "Alex Sanders",
    "phone": "",
    "address": "Alex Sanders 27 Norris Welch Rd APartment B Oakland MD 21550"
  },
  {
    "lookup": 27275,
    "name": "Savage River Works",
    "phone": 3013342335,
    "address": "Savage River Works 581 Clifton Dr Oakland MD 21550"
  },
  {
    "lookup": 27285,
    "name": "Dr. William G. Savage",
    "phone": 3013343435,
    "address": "Dr. William G. Savage Ardsley Farms Swanton MD 21561"
  },
  {
    "lookup": 27300,
    "name": "Savage Services Corporation",
    "phone": 3013345324,
    "address": "Savage Services Corporation 354 Table Rock Rd. Oakland MD 21550"
  },
  {
    "lookup": 27325,
    "name": "Ken's Auto RePair",
    "phone": 2403211331,
    "address": "Ken's Auto RePair 212 Gap Run Rd Friendsville MD 21531"
  },
  {
    "lookup": 27340,
    "name": "Calvin Schrock Farms",
    "phone": 3013348517,
    "address": "Calvin Schrock Farms 211 Wes White Road Oakland MD 21550"
  },
  {
    "lookup": 27350,
    "name": "Kenny Schrock Auto RePair",
    "phone": 3013345740,
    "address": "Kenny Schrock Auto RePair 7372 Gorman Rd. Oakland MD 21550"
  },
  {
    "lookup": 27400,
    "name": "Schrock Ag Parts",
    "phone": 3013349060,
    "address": "Schrock Ag Parts 247 Wes White Road Oakland MD 21550"
  },
  {
    "lookup": 27425,
    "name": "Schrock Trucking",
    "phone": 3016160447,
    "address": "Schrock Trucking 1568 Lynndale Rd. Oakland MD 21550"
  },
  {
    "lookup": 27500,
    "name": "Ernie Schrock",
    "phone": 3013349060,
    "address": "Ernie Schrock 3344 Underwood Rd. Oakland MD 21550"
  },
  {
    "lookup": 27525,
    "name": "BoBBy Schmidt",
    "phone": "",
    "address": "BoBBy Schmidt 1896 Memorial Drive Oakland Oakland MD 21550"
  },
  {
    "lookup": 27550,
    "name": "James E. Schmidt",
    "phone": 3013876557,
    "address": "James E. Schmidt 457 Steiding Church Rd Swanton MD 21561"
  },
  {
    "lookup": 27715,
    "name": "Second Chance Farms",
    "phone": 3013342094,
    "address": "Second Chance Farms 2833 Wilson Corona Road Oakland MD 21550"
  },
  {
    "lookup": 27800,
    "name": "Serious Trucking",
    "phone": 3046986728,
    "address": "Serious Trucking 40 Snyder Hollow Aurora WV 26705"
  },
  {
    "lookup": 27865,
    "name": "Delbert Shaffer",
    "phone": 3046985670,
    "address": "Delbert Shaffer PO Box 247 Rowlesburg WV 26425"
  },
  {
    "lookup": 27870,
    "name": "Robert Shaffer",
    "phone": "",
    "address": "Robert Shaffer 1952 Jennings Road Grantsville MD 21536"
  },
  {
    "lookup": 27900,
    "name": "Shaffer Ford Sales Inc.",
    "phone": 3013342121,
    "address": "Shaffer Ford Sales Inc. 12532 Garrett Highway Oakland MD 21550-1115"
  },
  {
    "lookup": 28100,
    "name": "Ray E. Shillingburg",
    "phone": 3013342862,
    "address": "Ray E. Shillingburg P.O. Box 93 Gormania WV 26720"
  },
  {
    "lookup": 28200,
    "name": "Shirer's Tin Shop",
    "phone": 3013343320,
    "address": "Shirer's Tin Shop 117 East Oak Street Oakland MD 21550"
  },
  {
    "lookup": 28375,
    "name": "Marvin W. Shreve",
    "phone": 3013345968,
    "address": "Marvin W. Shreve 60 Steyer Mine Road Oakland MD 21550"
  },
  {
    "lookup": 28400,
    "name": "Shreve Backhoe & Dozer Service",
    "phone": 3013344971,
    "address": "Shreve Backhoe & Dozer Service 2676 Shady Dale Rd. Oakland MD 21550"
  },
  {
    "lookup": 28450,
    "name": "Shreve Farming",
    "phone": 3047498229,
    "address": "Shreve Farming 761 Oak Dale Rd Keyser WV 26726"
  },
  {
    "lookup": 28475,
    "name": "Michael Slaubaugh",
    "phone": "",
    "address": "Michael Slaubaugh 660 Sweitzertown Rd Swanton MD 21561"
  },
  {
    "lookup": 28500,
    "name": "Bill Shuttleworth",
    "phone": 3013342023,
    "address": "Bill Shuttleworth 115 Tannery Rd. Oakland MD 21550"
  },
  {
    "lookup": 28510,
    "name": "Sierra Construction",
    "phone": 3047356867,
    "address": "Sierra Construction 880 Maple Spring Hwy. Eglon WV 26716"
  },
  {
    "lookup": 28550,
    "name": "Mr. Randy Sigley",
    "phone": 3046983552,
    "address": "Mr. Randy Sigley 261 Casteel Road Terra Alta WV 26764"
  },
  {
    "lookup": 28575,
    "name": "Silver Cross Trucking",
    "phone": 3047355259,
    "address": "Silver Cross Trucking Hc 82 Box 108 Terra Alta WV 26764"
  },
  {
    "lookup": 28600,
    "name": "Silver Knob Pallet LLC",
    "phone": 3013875004,
    "address": "Silver Knob Pallet LLC 479 O'Brien Rd. Swanton MD 21561"
  },
  {
    "lookup": 28625,
    "name": "Simco LLC",
    "phone": 3046677956,
    "address": "Simco LLC 1738 Maple Spring Hwy Eglon WV 26716"
  },
  {
    "lookup": 28630,
    "name": "Bill Simmons",
    "phone": 3044549404,
    "address": "Bill Simmons P.O. Box 222 Carolina WV 26563"
  },
  {
    "lookup": 28650,
    "name": "Simon Pearce (US), Inc.",
    "phone": 8026746280,
    "address": "Simon Pearce (US), Inc. 109 Park Road Windsor Vt 05089"
  },
  {
    "lookup": 28700,
    "name": "Simpson Auto Body",
    "phone": 3016161087,
    "address": "Simpson Auto Body 331 Hotel Rd. Deer Park MD 21550"
  },
  {
    "lookup": 28800,
    "name": "Simpson Trucking",
    "phone": "",
    "address": "Simpson Trucking 98 Apple Blossom Ln Oakland MD 21550"
  },
  {
    "lookup": 28825,
    "name": "Sines Harvesting",
    "phone": 3016169987,
    "address": "Sines Harvesting 235 Underwood Road Oakland MD 21550"
  },
  {
    "lookup": 28850,
    "name": "Skyline Excavating & Tree Servic",
    "phone": 3015013055,
    "address": "Skyline Excavating & Tree Servic 4162 Blooming Rose Rd Friendsville MD 21531"
  },
  {
    "lookup": 28950,
    "name": "David K. Sisler",
    "phone": "",
    "address": "David K. Sisler 403 Pleasant View Ln Oakland MD 21550"
  },
  {
    "lookup": 29000,
    "name": "John Sisler",
    "phone": 3013345667,
    "address": "John Sisler 805 Hutton Rd. Oakland MD 21550"
  },
  {
    "lookup": 29050,
    "name": "Vince Sisler",
    "phone": "",
    "address": "Vince Sisler Rt. 2 Box 4980 Oakland MD 21550"
  },
  {
    "lookup": 29200,
    "name": "Sisler Lumber Co.",
    "phone": 3013342778,
    "address": "Sisler Lumber Co. P.O. Box 40 New Creek WV 26743"
  },
  {
    "lookup": 29220,
    "name": "Sisler Trucking",
    "phone": "",
    "address": "Sisler Trucking P.O. Box 9895 Aurora WV 26705"
  },
  {
    "lookup": 29230,
    "name": "Shirley Slaubaugh",
    "phone": 3046937423,
    "address": "Shirley Slaubaugh P.O. Box 233 Bayard WV 26707"
  },
  {
    "lookup": 29275,
    "name": "American Heritage Home Imp.LLC",
    "phone": 3013878040,
    "address": "American Heritage Home Imp.LLC 3287 Cranesville Road Oakland MD 21550"
  },
  {
    "lookup": 29300,
    "name": "Snow's Mt. Top Service Center",
    "phone": 3048132079,
    "address": "Snow's Mt. Top Service Center Rt. 50 Box P0102 Mt Storm WV 26739"
  },
  {
    "lookup": 29400,
    "name": "Delmer Snyder",
    "phone": 3013342516,
    "address": "Delmer Snyder 114 F Street Mt Lake Park MD 21550"
  },
  {
    "lookup": 29405,
    "name": "Mr. Michael A. Snyder",
    "phone": 3013342396,
    "address": "Mr. Michael A. Snyder 2389 Pysell Crosscut Road Oakland MD 21550"
  },
  {
    "lookup": 29415,
    "name": "Snyder's Cabnets",
    "phone": 3013342662,
    "address": "Snyder's Cabnets 6646 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 29420,
    "name": "Snyder Motors",
    "phone": 3043292213,
    "address": "Snyder Motors P.O. Box 268 Kingwood WV 26537"
  },
  {
    "lookup": 29425,
    "name": "Sojourn Movers",
    "phone": 3013346211,
    "address": "Sojourn Movers 223 Deer Park Hotel Road Oakland MD 21550"
  },
  {
    "lookup": 29500,
    "name": "D.E. Bolden",
    "phone": 3013348582,
    "address": "D.E. Bolden 120 W. Pennington Street Oakland MD 21550"
  },
  {
    "lookup": 29550,
    "name": "Southern Garrett Co. Rescue Sq",
    "phone": 3013343000,
    "address": "Southern Garrett Co. Rescue Sq P.O. Box 378 Oakland MD 21550"
  },
  {
    "lookup": 29600,
    "name": "Southern High Auto Shop",
    "phone": 3013349447,
    "address": "Southern High Auto Shop 345 Oakland Dr. Oakland MD 21550"
  },
  {
    "lookup": 29700,
    "name": "Southern States Coop.",
    "phone": 3013342965,
    "address": "Southern States Coop. 1867 Maryland Hwy. Mt Lake Park MD 21550"
  },
  {
    "lookup": 29730,
    "name": "SPaid Spring Meadow Farm",
    "phone": 3047355201,
    "address": "SPaid Spring Meadow Farm 59 Beckman Dr. Eglon WV 26716"
  },
  {
    "lookup": 29750,
    "name": "Spring Lick Pallet",
    "phone": 3013878471,
    "address": "Spring Lick Pallet 2662 Spring Lick Rd. Swanton MD 21561"
  },
  {
    "lookup": 29800,
    "name": "A. A. Stacy & Son",
    "phone": 3012454027,
    "address": "A. A. Stacy & Son 1141 Orendorf Road Accident MD 21520"
  },
  {
    "lookup": 29850,
    "name": "Standard Laboratories",
    "phone": 3046937613,
    "address": "Standard Laboratories 13509 George Washington Hwy Mount Storm WV 26739"
  },
  {
    "lookup": 29900,
    "name": "Stans Garage",
    "phone": 3013341553,
    "address": "Stans Garage 1251 Bethlehem Rd. Oakland MD 21550"
  },
  {
    "lookup": 29925,
    "name": "Stellar Collision Center Inc",
    "phone": 3013342777,
    "address": "Stellar Collision Center Inc 4923 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 29965,
    "name": "Steyer Fuel Inc.",
    "phone": 3042960906,
    "address": "Steyer Fuel Inc. P.O. Box 549 Dellslow WV 26531"
  },
  {
    "lookup": 29975,
    "name": "Steyer Trucking",
    "phone": 3013343721,
    "address": "Steyer Trucking 1165 Steyer Mine Rd. Oakland MD 21550"
  },
  {
    "lookup": 30000,
    "name": "Larry Steadman",
    "phone": "",
    "address": "Larry Steadman 122 Wayne Harvey Rd. Oakland MD 21550"
  },
  {
    "lookup": 30100,
    "name": "BuFFAlo's Mow & Snow",
    "phone": 3013343301,
    "address": "BuFFAlo's Mow & Snow 10097 Garrett Hwy. Oakland MD 21550"
  },
  {
    "lookup": 30150,
    "name": "Mrs. Sheila Stemple",
    "phone": 3013341531,
    "address": "Mrs. Sheila Stemple 93 Shaffer Hill Road Oakland MD 21550"
  },
  {
    "lookup": 30160,
    "name": "Intersection",
    "phone": 3047353035,
    "address": "Intersection 3377 Maple Spring Hwy Eglon WV 26716"
  },
  {
    "lookup": 30175,
    "name": "Stemple Logging",
    "phone": 3047355402,
    "address": "Stemple Logging Hc 82 Box 218 Aurora WV 26705"
  },
  {
    "lookup": 30200,
    "name": "Byco Enterprises Inc",
    "phone": 3012464322,
    "address": "Byco Enterprises Inc 11746 Bittinger Rd Grantsville MD 21536"
  },
  {
    "lookup": 30300,
    "name": "Kearney Ridge Farm",
    "phone": 3013343979,
    "address": "Kearney Ridge Farm 563 N Lemoyne King Rd. Oakland MD 21550"
  },
  {
    "lookup": 30400,
    "name": "Lee Steyer Excavating",
    "phone": 3013342809,
    "address": "Lee Steyer Excavating 6381 Gorman Rd. Oakland MD 21550"
  },
  {
    "lookup": 30450,
    "name": "Mr. Randall Steyer",
    "phone": 3013342900,
    "address": "Mr. Randall Steyer 2727 Gorman Road Oakland MD 21550"
  },
  {
    "lookup": 30460,
    "name": "Sticks And Stones",
    "phone": 3016163820,
    "address": "Sticks And Stones 2986 Oakland Sang Run Rd Oakland MD 21550"
  },
  {
    "lookup": 30600,
    "name": "Stoney Hill Corporation",
    "phone": 3047355465,
    "address": "Stoney Hill Corporation 5544 Stemple Ridge Rd Aurora WV 26705"
  },
  {
    "lookup": 30650,
    "name": "Suburban Propane Accounts PAy",
    "phone": 3013342626,
    "address": "Suburban Propane Accounts PAy PO Box 7447 Attn:Csc2300 Philadelphia PA 19101"
  },
  {
    "lookup": 30675,
    "name": "Mr. Robert Streets",
    "phone": 3044465335,
    "address": "Mr. Robert Streets Route 1 Elk Garden WV 26717"
  },
  {
    "lookup": 30690,
    "name": "Success Floor Covering",
    "phone": 3013342203,
    "address": "Success Floor Covering 108E. Liberty Street Oakland MD 21550"
  },
  {
    "lookup": 30700,
    "name": "Dean Sullivan",
    "phone": 3013348792,
    "address": "Dean Sullivan 222 E Street Mt Lake Park MD 21550"
  },
  {
    "lookup": 30748,
    "name": "Sunrise RePair",
    "phone": 3016161938,
    "address": "Sunrise RePair 1791 Mansfield Rd Oakland MD 21550"
  },
  {
    "lookup": 30750,
    "name": "Sunrise Sanitation",
    "phone": 3013346212,
    "address": "Sunrise Sanitation P.O Box 675 Oakland MD 21550"
  },
  {
    "lookup": 30760,
    "name": "Sunset Farm",
    "phone": 3014533383,
    "address": "Sunset Farm 1261 North Hill Road Kitzmiller MD 21538"
  },
  {
    "lookup": 30765,
    "name": "Super Car Wash MD LLC",
    "phone": 3016166218,
    "address": "Super Car Wash MD LLC PO Box 675 Oakland MD 21550"
  },
  {
    "lookup": 30775,
    "name": "Dewitt's RePair",
    "phone": 3016168311,
    "address": "Dewitt's RePair 5726 Cransville Rd Oakland MD 21550"
  },
  {
    "lookup": 30800,
    "name": "Super Deal Auto Sales",
    "phone": 3013343664,
    "address": "Super Deal Auto Sales Route 1 Box 7926 Oakland MD 21550"
  },
  {
    "lookup": 30825,
    "name": "Super Duty Trucking LLC",
    "phone": 3047353408,
    "address": "Super Duty Trucking LLC PO Box 55 193 Eglon Rd Eglon WV 26716"
  },
  {
    "lookup": 30850,
    "name": "Swanton Groc.,Gas&Liquor",
    "phone": 3013875701,
    "address": "Swanton Groc.,Gas&Liquor 3562 Swanton Road Swanton MD 21561"
  },
  {
    "lookup": 30900,
    "name": "Jim Sweitzer",
    "phone": 3046989031,
    "address": "Jim Sweitzer 2415 Steyer Mine Rd. Oakland MD 21550"
  },
  {
    "lookup": 31000,
    "name": "Jerry Swiger",
    "phone": 3013344818,
    "address": "Jerry Swiger 614 Deer Park Ave. Mt Lake Park MD 21550"
  },
  {
    "lookup": 31100,
    "name": "Mr. Ron Swiger",
    "phone": 3015013623,
    "address": "Mr. Ron Swiger 123 Matthew Rd Oakland MD 21550"
  },
  {
    "lookup": 31200,
    "name": "Sylvan Manufacturing Co. Inc.",
    "phone": 3013343683,
    "address": "Sylvan Manufacturing Co. Inc. 436 South Eighth Street Oakland MD 21550"
  },
  {
    "lookup": 31250,
    "name": "Dave Sypolt",
    "phone": 3047353043,
    "address": "Dave Sypolt 4068 Seneca Trail Eglon WV 26716"
  },
  {
    "lookup": 31260,
    "name": "Sypolt Services",
    "phone": 3046988333,
    "address": "Sypolt Services P.O. Box 125 Terra Alta WV 26764"
  },
  {
    "lookup": 31265,
    "name": "Tnt Log & Siding Restoration LLC",
    "phone": 3016161542,
    "address": "Tnt Log & Siding Restoration LLC 887 Painter School Rd Swanton MD 21561"
  },
  {
    "lookup": 31270,
    "name": "T & B RePair",
    "phone": 3013348588,
    "address": "T & B RePair 210 Main Street Deer Park MD 21550"
  },
  {
    "lookup": 31272,
    "name": "T.C. Trucking & Garage",
    "phone": 3012684248,
    "address": "T.C. Trucking & Garage 19118 Legislative Rd Barton MD 21521"
  },
  {
    "lookup": 31275,
    "name": "T.C.S. Hardwoods Inc.",
    "phone": 3018955069,
    "address": "T.C.S. Hardwoods Inc. River Road Grantsville MD 21536"
  },
  {
    "lookup": 31285,
    "name": "T & L Excavating",
    "phone": 3047355879,
    "address": "T & L Excavating 524 Gnegy Church Rd. Eglon WV 26716"
  },
  {
    "lookup": 31286,
    "name": "T & P Trucking",
    "phone": 3047356657,
    "address": "T & P Trucking 1518 Brookside Rd Aurora WV 26705"
  },
  {
    "lookup": 31287,
    "name": "T & S Auto RePair",
    "phone": 3047353807,
    "address": "T & S Auto RePair 709 Accident Rd Eglon WV 26716"
  },
  {
    "lookup": 31289,
    "name": "T & T Electrical Service LLC",
    "phone": 3047355879,
    "address": "T & T Electrical Service LLC 524 Gnegy Church Rd Eglon WV 26716"
  },
  {
    "lookup": 31290,
    "name": "Choice Pre-Owned Auto",
    "phone": 3017073710,
    "address": "Choice Pre-Owned Auto 12800 Mcmullen Hwy Cumberland MD 21502"
  },
  {
    "lookup": 31300,
    "name": "Lost Land Stone",
    "phone": 3015010883,
    "address": "Lost Land Stone 2175 Potomac Camp Rd. Oakland MD 21550"
  },
  {
    "lookup": 31350,
    "name": "Derek Tasker's Auto RePair",
    "phone": 2403215362,
    "address": "Derek Tasker's Auto RePair 1257 Table Rock Rd Oakland MD 21550"
  },
  {
    "lookup": 31375,
    "name": "Tasker Excavating LLC",
    "phone": 3013872173,
    "address": "Tasker Excavating LLC 19194 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 31400,
    "name": "Tasker Trucking",
    "phone": 3013345920,
    "address": "Tasker Trucking 78 Congress Avenue Oakland MD 21550"
  },
  {
    "lookup": 31425,
    "name": "Tasker Logging",
    "phone": 3013343206,
    "address": "Tasker Logging 2099 Steyer Mine Rd Oakland MD 21550"
  },
  {
    "lookup": 31450,
    "name": "Target Lumber & Logging",
    "phone": 3013878244,
    "address": "Target Lumber & Logging P.O. Box 97 Oakland MD 21550"
  },
  {
    "lookup": 31500,
    "name": "Frazee Mountain Top Mgt",
    "phone": 2403211936,
    "address": "Frazee Mountain Top Mgt 4976 White Rock Rd Friendsville MD 21531"
  },
  {
    "lookup": 31515,
    "name": "Teagarden Small Engine RePair",
    "phone": "",
    "address": "Teagarden Small Engine RePair 671 Nestlick Acres Road Oakland MD 21550"
  },
  {
    "lookup": 31525,
    "name": "Team One",
    "phone": 3013349494,
    "address": "Team One 12899 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 31685,
    "name": "Terra Alta Community Ambulance",
    "phone": 3047896566,
    "address": "Terra Alta Community Ambulance P.O. Box 384 Terra Alta WV 26764"
  },
  {
    "lookup": 31725,
    "name": "Terra Alta V.F.D.",
    "phone": 3047895475,
    "address": "Terra Alta V.F.D. 1120 East State Ave. Terra Alta WV 26764"
  },
  {
    "lookup": 31750,
    "name": "Terra Alta Water Works",
    "phone": 3047896211,
    "address": "Terra Alta Water Works 701 A E. State Ave. Terra Alta WV 26764"
  },
  {
    "lookup": 31790,
    "name": "Thomas Hardwoods",
    "phone": 3013517306,
    "address": "Thomas Hardwoods 2859 Broadford Road Oakland MD 21550"
  },
  {
    "lookup": 31800,
    "name": "Thomas' Tires & Accessories",
    "phone": 3013344547,
    "address": "Thomas' Tires & Accessories 9276 Garrett Hwy. Oakland MD 21550"
  },
  {
    "lookup": 31890,
    "name": "Thomas And Thomas Construction",
    "phone": "",
    "address": "Thomas And Thomas Construction P.O. Box 193 Grantsville MD 21536"
  },
  {
    "lookup": 31897,
    "name": "Thomas RePair And Collision LLC",
    "phone": 3016166712,
    "address": "Thomas RePair And Collision LLC 1273 Table Rock Road Oakland MD 21550"
  },
  {
    "lookup": 31900,
    "name": "Larry E. Thomas",
    "phone": 3013345972,
    "address": "Larry E. Thomas 3158 Table Rock Rd. Oakland MD 21550"
  },
  {
    "lookup": 31950,
    "name": "Tim Thomas",
    "phone": 3047896302,
    "address": "Tim Thomas 114 Caldwell Street Terra Alta WV 26764"
  },
  {
    "lookup": 31960,
    "name": "Timbrook Automotive 9.0 LLC",
    "phone": 3013342121,
    "address": "Timbrook Automotive 9.0 LLC 12532 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 31975,
    "name": "Tichnell & Son",
    "phone": 3016165502,
    "address": "Tichnell & Son 373 Steyer Mine Rd Oakland MD 21550"
  },
  {
    "lookup": 32100,
    "name": "Tom Hardesty",
    "phone": 3015018668,
    "address": "Tom Hardesty P.O. Box 2011 Mt Lake Park MD 21550"
  },
  {
    "lookup": 32125,
    "name": "Thompson Gas",
    "phone": 3013872400,
    "address": "Thompson Gas 17863 Garrett Hwy. Oakland MD 21550"
  },
  {
    "lookup": 32150,
    "name": "Top Shop",
    "phone": 3013343251,
    "address": "Top Shop 222 Nazelrod Rd. Oakland MD 21550"
  },
  {
    "lookup": 32225,
    "name": "Town Of Bayard",
    "phone": 3046937134,
    "address": "Town Of Bayard P.O Box 243 Bayard WV 26707"
  },
  {
    "lookup": 32250,
    "name": "Town Of Deer Park",
    "phone": 3013344531,
    "address": "Town Of Deer Park 100 Church Street Deer Park MD 21550"
  },
  {
    "lookup": 32275,
    "name": "Town Of Kitzmiller Mayor & Cou",
    "phone": 3014533449,
    "address": "Town Of Kitzmiller Mayor & Cou P.O. Box 607 Kitzmiller MD 21538"
  },
  {
    "lookup": 32300,
    "name": "Town Of Loch Lynn",
    "phone": 3013348339,
    "address": "Town Of Loch Lynn 211 Bonnie Blvd Mt Lake Park MD 21550"
  },
  {
    "lookup": 32400,
    "name": "Town Of Mt. Lake Park",
    "phone": 3013342250,
    "address": "Town Of Mt. Lake Park P.O. Box 2182 Mt Lake Park MD 21550"
  },
  {
    "lookup": 32500,
    "name": "Town Of Oakland",
    "phone": 3013342691,
    "address": "Town Of Oakland 15 South Third St. Oakland MD 21550"
  },
  {
    "lookup": 32550,
    "name": "Town Of Rowlesburg",
    "phone": 3044542441,
    "address": "Town Of Rowlesburg P.O. Box 458 Rowlesburg WV 26425"
  },
  {
    "lookup": 32625,
    "name": "Traxx LLC",
    "phone": 3013346911,
    "address": "Traxx LLC 81 Bethlehem Rd Oakland MD 21550"
  },
  {
    "lookup": 32650,
    "name": "Tree & Land Service",
    "phone": 3013344791,
    "address": "Tree & Land Service 18215 Garrett Hwy Oakland MD 21550"
  },
  {
    "lookup": 32700,
    "name": "Triple D Logging",
    "phone": 3047353026,
    "address": "Triple D Logging 22180 George Washington Hwy Aurora WV 26705"
  },
  {
    "lookup": 32750,
    "name": "Tressler's Garage",
    "phone": 3013344160,
    "address": "Tressler's Garage 2701 Old Crellin Rd. Oakland MD 21550"
  },
  {
    "lookup": 32775,
    "name": "Tressler's Auto Electric",
    "phone": 3013349341,
    "address": "Tressler's Auto Electric 1477 Maryland Hwy Mt Lake Park MD 21550"
  },
  {
    "lookup": 32780,
    "name": "Eric Tribbey",
    "phone": "",
    "address": "Eric Tribbey P.O. Box 2202 Mt Lake Park MD 21550"
  },
  {
    "lookup": 32790,
    "name": "Triple S Construction",
    "phone": 3013877607,
    "address": "Triple S Construction 97 Sky VAlley Spur Rd Swanton MD 21561"
  },
  {
    "lookup": 32791,
    "name": "Triple S Hardwoods, LLC",
    "phone": 3016166335,
    "address": "Triple S Hardwoods, LLC 4704 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 32795,
    "name": "Triple Green Mill LLC",
    "phone": 3047498736,
    "address": "Triple Green Mill LLC 3400 Keplinger Rd Maysville WV 26833"
  },
  {
    "lookup": 32800,
    "name": "Trout Run Farm",
    "phone": 3013343051,
    "address": "Trout Run Farm 444 Landons Dam Road Oakland MD 21550"
  },
  {
    "lookup": 32900,
    "name": "Tri County Hardwoods",
    "phone": 3043794225,
    "address": "Tri County Hardwoods Rt. 3 Bruceton Mills WV 26525"
  },
  {
    "lookup": 33015,
    "name": "Tri-State Gazebo LLC",
    "phone": 3013870447,
    "address": "Tri-State Gazebo LLC 5637 Bittinger Rd Swanton MD 21561"
  },
  {
    "lookup": 33025,
    "name": "Tri State Seal Coating Inc.",
    "phone": 3013875053,
    "address": "Tri State Seal Coating Inc. 163 Pine Tree Point Rd. Swanton MD 21561"
  },
  {
    "lookup": 33040,
    "name": "Trumbull Corporation",
    "phone": "",
    "address": "Trumbull Corporation P.O. Box 6774 Pittsburgh PA 15212"
  },
  {
    "lookup": 33050,
    "name": "Tub's And Stuff",
    "phone": 3013343539,
    "address": "Tub's And Stuff 8 Wallman Road Oakland MD 21550"
  },
  {
    "lookup": 33060,
    "name": "Tucker Co. High School",
    "phone": 3044783111,
    "address": "Tucker Co. High School Rt. 1 Box 153 Hambletton WV 26269"
  },
  {
    "lookup": 33065,
    "name": "Tucker Co Solid Waste Auth.",
    "phone": 3042594867,
    "address": "Tucker Co Solid Waste Auth. PO Box 445 407 William Ave Davis WV 26260"
  },
  {
    "lookup": 33090,
    "name": "UTS",
    "phone": 3015330548,
    "address": "UTS P.O. Box 135 Mt Storm WV 26739"
  },
  {
    "lookup": 33100,
    "name": "Underwood Excavating",
    "phone": 3013349391,
    "address": "Underwood Excavating P.O. Box 712 Oakland MD 21550"
  },
  {
    "lookup": 33150,
    "name": "Underwood Metal Works LLC",
    "phone": 3016164678,
    "address": "Underwood Metal Works LLC 47 Morgans Lane Oakland MD 21550"
  },
  {
    "lookup": 33200,
    "name": "Legend Auto Center & Used Cars",
    "phone": 2404466488,
    "address": "Legend Auto Center & Used Cars 171 MD Line Rd Bruceton Mills WV 26525"
  },
  {
    "lookup": 33250,
    "name": "Union Ambulance Service",
    "phone": 3047356881,
    "address": "Union Ambulance Service 23979 George Washington Hwy Aurora WV 26705"
  },
  {
    "lookup": 33275,
    "name": "Uphold Trucking LLC.",
    "phone": 7242080063,
    "address": "Uphold Trucking LLC. P.O. Box 184 Farmington PA 15437"
  },
  {
    "lookup": 33300,
    "name": "Deer Park Automotive",
    "phone": 3013349321,
    "address": "Deer Park Automotive 424 Edgewood Drive Oakland MD 21550"
  },
  {
    "lookup": 33350,
    "name": "Upole Camper Sales",
    "phone": 3013344693,
    "address": "Upole Camper Sales P.O. Box3112 Deer Park MD 21550"
  },
  {
    "lookup": 33370,
    "name": "US Army Student Training Facil",
    "phone": "",
    "address": "US Army Student Training Facil 240 Army Road Kingwood WV 26537-0860"
  },
  {
    "lookup": 33375,
    "name": "Ted Uphold",
    "phone": 3013342927,
    "address": "Ted Uphold 473 Garrett Rd. Oakland MD 21550"
  },
  {
    "lookup": 33380,
    "name": "Brian VAndevender",
    "phone": 3046977106,
    "address": "Brian VAndevender P.O. Box 26 Aurora WV 26705"
  },
  {
    "lookup": 33385,
    "name": "Verizon Fleet",
    "phone": 3013349976,
    "address": "Verizon Fleet Mc: Txadtdmd PO Box 152134 Irving Tx 75015"
  },
  {
    "lookup": 33450,
    "name": "Viola Sharpening & RePair",
    "phone": 3047355481,
    "address": "Viola Sharpening & RePair 373 Quaking Maples Dr Eglon WV 26716"
  },
  {
    "lookup": 33500,
    "name": "Vindex Energy Corporation",
    "phone": 3042594853,
    "address": "Vindex Energy Corporation PO Box 78 201 BuFFAlo Coal Rd Mount Storm WV 26739"
  },
  {
    "lookup": 33525,
    "name": "Virginia Power Mt.Storm Power",
    "phone": 3042595272,
    "address": "Virginia Power Mt.Storm Power Attn: Accounting Mt Storm WV 26739"
  },
  {
    "lookup": 33530,
    "name": "Virginia Electric & Power",
    "phone": 3046937885,
    "address": "Virginia Electric & Power C/O North Branch Operatio Bayard WV 26707"
  },
  {
    "lookup": 33550,
    "name": "Virts Auto Sales",
    "phone": 3014533533,
    "address": "Virts Auto Sales Star Route Box 21 Kitzmiller MD 21538"
  },
  {
    "lookup": 33600,
    "name": "Larry Wagner Trucking",
    "phone": 3013876160,
    "address": "Larry Wagner Trucking 299 Spring Glade Road Oakland MD 21550"
  },
  {
    "lookup": 33650,
    "name": "W.R. Casteel Co. Inc.",
    "phone": 7244373672,
    "address": "W.R. Casteel Co. Inc. 323 Hopwood Coolspring Rd. Hopwood PA 15445"
  },
  {
    "lookup": 33700,
    "name": "W.W. Auto RePair",
    "phone": 3013344927,
    "address": "W.W. Auto RePair 5362 Hutton Road Oakland MD 21550"
  },
  {
    "lookup": 33750,
    "name": "W & W Logging",
    "phone": 3046937576,
    "address": "W & W Logging P.O. Box 144 Mt Storm WV 26739"
  },
  {
    "lookup": 33850,
    "name": "Wayne's Water & Wells",
    "phone": 3013877181,
    "address": "Wayne's Water & Wells 19139 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 33855,
    "name": "WeBB Distributors LLC",
    "phone": 3013346121,
    "address": "WeBB Distributors LLC 991 Old Crellin Rd Oakland MD 21550"
  },
  {
    "lookup": 33860,
    "name": "Welding Rod",
    "phone": 3013879111,
    "address": "Welding Rod 3456 Sandflat Road Oakland MD 21550"
  },
  {
    "lookup": 33865,
    "name": "Walter Weeks",
    "phone": 3013349740,
    "address": "Walter Weeks 1947 SmoUse Road Oakland MD 21550"
  },
  {
    "lookup": 33870,
    "name": "Frankie Weese",
    "phone": "",
    "address": "Frankie Weese Hc 30 Box 156 Maysville WV 26833"
  },
  {
    "lookup": 34000,
    "name": "Cecil W. Welch Jr.",
    "phone": 3013876071,
    "address": "Cecil W. Welch Jr. 3547 Oakland Sang Run Rd. Oakland MD 21550"
  },
  {
    "lookup": 34200,
    "name": "Wells Auger Mining",
    "phone": 3047896837,
    "address": "Wells Auger Mining 948 Burnside Camp Rd Terra Alta WV 26764"
  },
  {
    "lookup": 34250,
    "name": "James L. Wells",
    "phone": "",
    "address": "James L. Wells 777 Burnside Camp Rd. Terra Alta WV 26764"
  },
  {
    "lookup": 34300,
    "name": "Mark Wells",
    "phone": "",
    "address": "Mark Wells 1093 Burnside Camp Rd Terra Alta WV 26764"
  },
  {
    "lookup": 34400,
    "name": "Whistle Pig Farm",
    "phone": 2403217304,
    "address": "Whistle Pig Farm 499 Snyder Rd Oakland MD 21550"
  },
  {
    "lookup": 34410,
    "name": "Western Maryland 4-H Center",
    "phone": 3013346960,
    "address": "Western Maryland 4-H Center 1916 Maryland Highway Mt Lake Park MD 21550"
  },
  {
    "lookup": 34450,
    "name": "Western Maryland Septic Servic",
    "phone": 3016163234,
    "address": "Western Maryland Septic Servic 2970 Fingerboard Rd. Oakland MD 21550"
  },
  {
    "lookup": 34460,
    "name": "Western Maryland Tin Shop",
    "phone": 3013340670,
    "address": "Western Maryland Tin Shop 17 First Avenue Loch Lynn MD 21550"
  },
  {
    "lookup": 34462,
    "name": "Western Maryland Towing",
    "phone": 3016162929,
    "address": "Western Maryland Towing 412 West Liberty St Oakland MD 21550"
  },
  {
    "lookup": 34465,
    "name": "Western MD. Truck Parts",
    "phone": 3013872990,
    "address": "Western MD. Truck Parts 5204 Bittinger Road Swanton MD 21561"
  },
  {
    "lookup": 34468,
    "name": "Western Trails LLC",
    "phone": 3013876155,
    "address": "Western Trails LLC 4009 Mayhew Inn Rd Oakland MD 21550"
  },
  {
    "lookup": 34475,
    "name": "Westmar Builders, Inc.",
    "phone": 3013870088,
    "address": "Westmar Builders, Inc. 6201 Sang Run Rd. Mchenry MD 21541"
  },
  {
    "lookup": 34490,
    "name": "A & A Truck Service",
    "phone": 3013341025,
    "address": "A & A Truck Service 12 Deer Park Hotel Rd Oakland MD 21550"
  },
  {
    "lookup": 34495,
    "name": "West VA Dpt. Trans Highway",
    "phone": "",
    "address": "West VA Dpt. Trans Highway Clarksburg WV 26302"
  },
  {
    "lookup": 34500,
    "name": "Whitacre Auto Sales",
    "phone": 3013349537,
    "address": "Whitacre Auto Sales 4429 Maryland Hgy. Oakland MD 21550"
  },
  {
    "lookup": 34520,
    "name": "George White",
    "phone": "",
    "address": "George White 934 Old Crellin Road Oakland MD 21550"
  },
  {
    "lookup": 34525,
    "name": "White Church Auto",
    "phone": 3013349038,
    "address": "White Church Auto 1240 White Church Oakland MD 21550"
  },
  {
    "lookup": 34550,
    "name": "White Construction",
    "phone": 7658328526,
    "address": "White Construction PO Box 249 Clinton In 47842"
  },
  {
    "lookup": 34575,
    "name": "White Rock Auto Parts",
    "phone": 3017465045,
    "address": "White Rock Auto Parts Rt. 1 Box 251C Friendsville MD 21531"
  },
  {
    "lookup": 34600,
    "name": "White's RePair Service",
    "phone": 3013341395,
    "address": "White's RePair Service 517 Tower Street Oakland MD 21550"
  },
  {
    "lookup": 34601,
    "name": "White Trucking",
    "phone": 3013344875,
    "address": "White Trucking 83 Bethleham Rd. Oakland MD 21550"
  },
  {
    "lookup": 34603,
    "name": "Rex Wiles",
    "phone": 3047892170,
    "address": "Rex Wiles 2935 Rag Tavern Rd. Terra Alta WV 26764"
  },
  {
    "lookup": 34610,
    "name": "Roy Wiles Trucking",
    "phone": 3047892835,
    "address": "Roy Wiles Trucking 335 Oak Grove Cemetery Rd Terra Alta WV 26764"
  },
  {
    "lookup": 34615,
    "name": "Leonard Wilhelm Jr Logging",
    "phone": "",
    "address": "Leonard Wilhelm Jr Logging 723 West Blocher Rd. Lonaconing MD 21539"
  },
  {
    "lookup": 34620,
    "name": "Ew Hauling",
    "phone": 3013349221,
    "address": "Ew Hauling 1006 Broadford Rd. Oakland MD 21550"
  },
  {
    "lookup": 34625,
    "name": "Mr. Richard A. Wilt",
    "phone": 3013341166,
    "address": "Mr. Richard A. Wilt 445 Wayne Harvey Rd Oakland MD 21550"
  },
  {
    "lookup": 34630,
    "name": "Earl Wilt",
    "phone": 3013348322,
    "address": "Earl Wilt 338 Gorman St. Oakland MD 21550"
  },
  {
    "lookup": 34650,
    "name": "Windfield Golf Course",
    "phone": 2405223691,
    "address": "Windfield Golf Course 214 Kamp Side Rd Lonaconing MD 21539"
  },
  {
    "lookup": 34670,
    "name": "Richard K. Winters",
    "phone": 3047356560,
    "address": "Richard K. Winters 64 Maple Spring Hwy Eglon WV 26716"
  },
  {
    "lookup": 34673,
    "name": "Winters General Contractor",
    "phone": 3013341567,
    "address": "Winters General Contractor 116 N 8th St Oakland MD 21550"
  },
  {
    "lookup": 34675,
    "name": "Winters Painting",
    "phone": 3013349731,
    "address": "Winters Painting 171 Fingerboard Road Oakland MD 21550"
  },
  {
    "lookup": 34680,
    "name": "Mr. Michael L. White",
    "phone": 3013876648,
    "address": "Mr. Michael L. White 837 Spring Glade Rd. Oakland MD 21550"
  },
  {
    "lookup": 34700,
    "name": "Wisp Resort",
    "phone": 3013875581,
    "address": "Wisp Resort 290 Marsh Hill Rd. Mchenry MD 21541"
  },
  {
    "lookup": 34750,
    "name": "Wkhj",
    "phone": 3013344272,
    "address": "Wkhj P.O. Box 2337 Mt Lake Park MD 21550"
  },
  {
    "lookup": 34800,
    "name": "Ted Wolf Contracting",
    "phone": 3016166213,
    "address": "Ted Wolf Contracting P.O.Box 2325 Mt Lake Park MD 21550"
  },
  {
    "lookup": 34925,
    "name": "Harlin L. Wolfe",
    "phone": "",
    "address": "Harlin L. Wolfe 125 Accident Rd Eglon WV 26716"
  },
  {
    "lookup": 34970,
    "name": "Wolfman Trucking",
    "phone": 3015016001,
    "address": "Wolfman Trucking 194 Maple Del Lane Oakland MD 21550"
  },
  {
    "lookup": 34975,
    "name": "Wolford Trucking",
    "phone": 3044549711,
    "address": "Wolford Trucking 18718 George Washington Hwy Rowlesburg WV 26425"
  },
  {
    "lookup": 35000,
    "name": "Wood Products Inc.",
    "phone": 3013349451,
    "address": "Wood Products Inc. 442 S. 8th Street Oakland MD 21550"
  },
  {
    "lookup": 35025,
    "name": "W.P.O. Inc.",
    "phone": 8142893197,
    "address": "W.P.O. Inc. 145 Meadow Somerset PA 15501"
  },
  {
    "lookup": 35050,
    "name": "Y.H.O.A.",
    "phone": 3013341416,
    "address": "Y.H.O.A. 36 Youghiogeny Blvd. Oakland MD 21550"
  },
  {
    "lookup": 35100,
    "name": "Marlin Lawson",
    "phone": 3017465480,
    "address": "Marlin Lawson 3149 Old Morgantown Rd. Friendsville MD 21531"
  },
  {
    "lookup": 35300,
    "name": "New England Truss & Joist",
    "phone": 3018954220,
    "address": "New England Truss & Joist 81 Bethlehem Rd. Oakland MD 21550"
  },
  {
    "lookup": 35500,
    "name": "219 Motors",
    "phone": 3013340500,
    "address": "219 Motors Box 494 Oakland MD 21550"
  },
  {
    "lookup": 35525,
    "name": "135 Liberty",
    "phone": 3013342936,
    "address": "135 Liberty P.O. Box 119 Oakland MD 21550"
  },
  {
    "lookup": 35540,
    "name": "135 Enterprises",
    "phone": 3016160362,
    "address": "135 Enterprises 712 Sunshine Dr. Mt Lake Park MD 21550"
  },
  {
    "lookup": 35550,
    "name": "Dick's Electric",
    "phone": 3013879585,
    "address": "Dick's Electric 18154 Garrett Highway Oakland MD 21550"
  },
  {
    "lookup": 37000,
    "name": "Dung Hill Farms",
    "phone": "",
    "address": "Dung Hill Farms 2885 Fingerboard Rd Oakland MD 21550"
  },
  {
    "lookup": 54700,
    "name": "Busters Stump & Tree Removal",
    "phone": 3013349784,
    "address": "Busters Stump & Tree Removal 8005 George Washington Hwy Oakland MD 21550"
  },
  {
    "lookup": 999999,
    "name": "Cash Account",
    "phone": "",
    "address": "Cash Account Mt Lake Park MD 21550"
  },
  {
    "lookup": 1,
    "name": "Southern Auto Supply",
    "phone": 3013341200,
    "address": "Southern Auto Supply P.0. Box 2335 Route 135 Mt Lake Park MD 21550"
  }
] ;
 export default customers 