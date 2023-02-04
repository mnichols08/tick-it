const customers = [
  {
    "Lookup": 90001,
    "Name": "Southern Auto Supply",
    "Phone": "",
    "Address": "Southern Auto Supply Mt Lake Park MD 21550"
  },
  {
    "Lookup": 3,
    "Name": "Paid Out Account",
    "Phone": "",
    "Address": "Paid Out Account"
  },
  {
    "Lookup": 2,
    "Name": "Farris Farm",
    "Phone": 5403031000,
    "Address": "Farris Farm Berkeley Springs WV 25411"
  },
  {
    "Lookup": 5,
    "Name": "84 Lumber #0928",
    "Phone": 3013346184,
    "Address": "84 Lumber #0928 Scenic 135 & Ind. Park Dr Oakland MD 21550"
  },
  {
    "Lookup": 6,
    "Name": "8Z Timber Products",
    "Phone": 3046986434,
    "Address": "8Z Timber Products PO Box 474 Rowlesburg WV 26425"
  },
  {
    "Lookup": 7,
    "Name": "A & D Well LLC",
    "Phone": 8143434970,
    "Address": "A & D Well LLC P.O. Box 245 Philipsburg PA 16866"
  },
  {
    "Lookup": 10,
    "Name": "A & K Auto Service",
    "Phone": 3047892333,
    "Address": "A & K Auto Service East State Ave. Terra Alta WV 26764"
  },
  {
    "Lookup": 11,
    "Name": "A & T Car And Truck RePair",
    "Phone": 3044549607,
    "Address": "A & T Car And Truck RePair 1569 Russ Deberry Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 15,
    "Name": "Albert Wengerd",
    "Phone": 3013344596,
    "Address": "Albert Wengerd H.C. 71 Box 118 Augusta WV 26704"
  },
  {
    "Lookup": 25,
    "Name": "Accident V.F.D.",
    "Phone": "",
    "Address": "Accident V.F.D. Accident MD 21520"
  },
  {
    "Lookup": 50,
    "Name": "Autoland Cdjr",
    "Phone": 3017468181,
    "Address": "Autoland Cdjr 113 South Main St. Accident MD 21520"
  },
  {
    "Lookup": 75,
    "Name": "Ace Quick Lube",
    "Phone": 3013345181,
    "Address": "Ace Quick Lube 103 N Third St. Oakland MD 21550"
  },
  {
    "Lookup": 100,
    "Name": "Test Account",
    "Phone": "",
    "Address": "Test Account"
  },
  {
    "Lookup": 100,
    "Name": "Mr Jeff Ackerman",
    "Phone": "",
    "Address": "Mr Jeff Ackerman 2491 Shady Dell Rd. Oakland MD 21550"
  },
  {
    "Lookup": 225,
    "Name": "Action Hardware And Fasteners",
    "Phone": 3017468485,
    "Address": "Action Hardware And Fasteners P.O. Box 9 Mchenry MD 21541-0009"
  },
  {
    "Lookup": 250,
    "Name": "Adam Construction",
    "Phone": 3013874898,
    "Address": "Adam Construction 5312 Sang Run Rd. Mchenry MD 21541"
  },
  {
    "Lookup": 300,
    "Name": "Adams Garage",
    "Phone": 3046937079,
    "Address": "Adams Garage 290 Adams Lane Mt Storm WV 26739"
  },
  {
    "Lookup": 325,
    "Name": "Adam's Trucking",
    "Phone": 3047355855,
    "Address": "Adam's Trucking 212 Parsons Rd Aurora WV 26705"
  },
  {
    "Lookup": 326,
    "Name": "Advance Auto Parts 5882",
    "Phone": 3042968914,
    "Address": "Advance Auto Parts 5882 1000 Fairmont Rd Morgantown WV 26501"
  },
  {
    "Lookup": 327,
    "Name": "Advance Auto Parts 7210",
    "Phone": 3042912095,
    "Address": "Advance Auto Parts 7210 1460 Earl L Core Rd Morgantown WV 26505"
  },
  {
    "Lookup": 328,
    "Name": "Advance Auto Parts 7500",
    "Phone": 3043293148,
    "Address": "Advance Auto Parts 7500 318 E Main St Kingwood WV 26537"
  },
  {
    "Lookup": 329,
    "Name": "Advance Auto Parts 6216",
    "Phone": 3015330952,
    "Address": "Advance Auto Parts 6216 12809 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 330,
    "Name": "AEI Builders",
    "Phone": 3016166407,
    "Address": "AEI Builders PO Box 676 Oakland MD 21550"
  },
  {
    "Lookup": 331,
    "Name": "Advance Auto Parts 7260",
    "Phone": 3042842050,
    "Address": "Advance Auto Parts 7260 830 Monogahela Blvd Morgantown WV 26505"
  },
  {
    "Lookup": 332,
    "Name": "Advance Auto Parts 5593",
    "Phone": 3045922095,
    "Address": "Advance Auto Parts 5593 210 S Pike St Shinnston WV 26431"
  },
  {
    "Lookup": 333,
    "Name": "Advance Auto Parts 6099",
    "Phone": 3043633476,
    "Address": "Advance Auto Parts 6099 2784 White Hall Blvd Fairmont WV 26554"
  },
  {
    "Lookup": 334,
    "Name": "Advance Auto Parts 7180",
    "Phone": 3048421901,
    "Address": "Advance Auto Parts 7180 1025 W Main St Bridgeport WV 26330"
  },
  {
    "Lookup": 335,
    "Name": "Advance Auto Parts 7200",
    "Phone": 3046368438,
    "Address": "Advance Auto Parts 7200 730 Beverly Pike Elkins WV 26241"
  },
  {
    "Lookup": 336,
    "Name": "Advance Auto Parts 7310",
    "Phone": 3042691191,
    "Address": "Advance Auto Parts 7310 100 Marketplace Mall Ste 2-A Weston WV 26452"
  },
  {
    "Lookup": 337,
    "Name": "Advance Auto Parts 7400",
    "Phone": 3042652030,
    "Address": "Advance Auto Parts 7400 502 Blueville Dr Grafton WV 26354"
  },
  {
    "Lookup": 338,
    "Name": "Advance Auto Parts 7440",
    "Phone": 3046226171,
    "Address": "Advance Auto Parts 7440 417 Buckhannon Pike Clarksburg WV 26301"
  },
  {
    "Lookup": 339,
    "Name": "Advance Auto Parts 7490",
    "Phone": 3044572040,
    "Address": "Advance Auto Parts 7490 Rt 4 Box 320F / Rt250S Philippi WV 26416"
  },
  {
    "Lookup": 340,
    "Name": "Advance Auto Parts 7559",
    "Phone": 3044622771,
    "Address": "Advance Auto Parts 7559 3 Foodland Plaza Glenville WV 26351"
  },
  {
    "Lookup": 341,
    "Name": "Advance Auto Parts 7560",
    "Phone": 3043662615,
    "Address": "Advance Auto Parts 7560 917 Morgantown Ave Fairmont WV 26554"
  },
  {
    "Lookup": 342,
    "Name": "Advance Auto Parts 7945",
    "Phone": 3044722199,
    "Address": "Advance Auto Parts 7945 181 S Kanawha St Buckhannon WV 26201"
  },
  {
    "Lookup": 343,
    "Name": "Advance Auto Parts 8915",
    "Phone": 3049863629,
    "Address": "Advance Auto Parts 8915 3 Rainbow Plaza Mannington WV 26582"
  },
  {
    "Lookup": 344,
    "Name": "Advance Auto Parts 7724",
    "Phone": 7244911050,
    "Address": "Advance Auto Parts 7724 2175 Mcclellandtown Rd Masontown PA 15461"
  },
  {
    "Lookup": 345,
    "Name": "Advance Auto Parts 7520",
    "Phone": 3017880011,
    "Address": "Advance Auto Parts 7520 Rr. 3 Box 3134 Keyser WV 26726"
  },
  {
    "Lookup": 346,
    "Name": "Advance Auto Parts #6098",
    "Phone": 5406222563,
    "Address": "Advance Auto Parts #6098 28 North CommeRCe Avenue Front Royal VA 22630"
  },
  {
    "Lookup": 350,
    "Name": "Ag-Future Inc.",
    "Phone": 3013341269,
    "Address": "Ag-Future Inc. 1113 Youghiogheny Drive Mt Lake Park MD 21550"
  },
  {
    "Lookup": 360,
    "Name": "Mary Ann Maze",
    "Phone": 3013343838,
    "Address": "Mary Ann Maze 2226 Rag Tavern Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 400,
    "Name": "Mr George Ahern",
    "Phone": 5406658514,
    "Address": "Mr George Ahern 700 Ross St. Winchester VA 22601"
  },
  {
    "Lookup": 425,
    "Name": "Alden's Boat RePair",
    "Phone": "",
    "Address": "Alden's Boat RePair 852 Pysell Crosscut Rd Oakland MD 21550"
  },
  {
    "Lookup": 430,
    "Name": "Ali Ghan Hirage",
    "Phone": 3013345276,
    "Address": "Ali Ghan Hirage P.O. Box 184 Oakland MD 21550"
  },
  {
    "Lookup": 500,
    "Name": "All Construction",
    "Phone": 3046937131,
    "Address": "All Construction PO Box 232 Mt Storm WV 26739"
  },
  {
    "Lookup": 550,
    "Name": "All Season Contracting",
    "Phone": 3015333232,
    "Address": "All Season Contracting 405 Markwood Dr. Oakland MD 21550"
  },
  {
    "Lookup": 600,
    "Name": "New Allegheny Inc.",
    "Phone": 3046937621,
    "Address": "New Allegheny Inc. P.O. Box 307 Mt Storm WV 26739"
  },
  {
    "Lookup": 625,
    "Name": "Amtower Auto Supply Inc.",
    "Phone": 3045926272,
    "Address": "Amtower Auto Supply Inc. P.O. Box 4639 Bridgeport WV 26330"
  },
  {
    "Lookup": 650,
    "Name": "Amtowers Hilltop Collision Ctr",
    "Phone": 3047882995,
    "Address": "Amtowers Hilltop Collision Ctr Rt. 5 Box 494 Keyser WV 26726"
  },
  {
    "Lookup": 700,
    "Name": "Appalachian Center",
    "Phone": 3013348146,
    "Address": "Appalachian Center 39 S. Third Street Oakland MD 21550-1519"
  },
  {
    "Lookup": 725,
    "Name": "Appalachian Iron",
    "Phone": 3013879312,
    "Address": "Appalachian Iron 1103 Spring Glade Road Oakland MD 21550"
  },
  {
    "Lookup": 775,
    "Name": "Appalachian Railway Services",
    "Phone": 3013341888,
    "Address": "Appalachian Railway Services P.O.Box 2368 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 777,
    "Name": "Appalachian Services LLC",
    "Phone": 3016160334,
    "Address": "Appalachian Services LLC 336 Cedar Ln Oakland MD 21550"
  },
  {
    "Lookup": 795,
    "Name": "Appalachian Wood Pellets, Inc",
    "Phone": 3043294000,
    "Address": "Appalachian Wood Pellets, Inc PO Box 601 Kingwood WV 26537"
  },
  {
    "Lookup": 850,
    "Name": "Allegheny Power",
    "Phone": 3017595747,
    "Address": "Allegheny Power 12454 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 875,
    "Name": "Alleghany Investments LLC",
    "Phone": 3046937131,
    "Address": "Alleghany Investments LLC Rt. 93 Mt Storm WV 26739"
  },
  {
    "Lookup": 880,
    "Name": "All In Plumbing",
    "Phone": 3015016209,
    "Address": "All In Plumbing 21 Warnick St Oakland MD 21550"
  },
  {
    "Lookup": 900,
    "Name": "Allegheny Welding",
    "Phone": 3013348181,
    "Address": "Allegheny Welding P.O. Box 166 Oakland MD 21550"
  },
  {
    "Lookup": 910,
    "Name": "Alleghany Well Drilling",
    "Phone": 3013343950,
    "Address": "Alleghany Well Drilling P.O. Box 3118 Swanton MD 21561"
  },
  {
    "Lookup": 915,
    "Name": "Allegany Wood Products Mill #2",
    "Phone": 3042571082,
    "Address": "Allegany Wood Products Mill #2 P.O. Box 319 Mt Storm WV 26739"
  },
  {
    "Lookup": 925,
    "Name": "Allegheny Wood Products Mill 3",
    "Phone": 3042571082,
    "Address": "Allegheny Wood Products Mill 3 P.O. Box 63 Bayard WV 26707"
  },
  {
    "Lookup": 930,
    "Name": "Allegheny Wood Prod. Mill # 5",
    "Phone": 3043292097,
    "Address": "Allegheny Wood Prod. Mill # 5 P.O. Box 130 Kingwood WV 26537"
  },
  {
    "Lookup": 945,
    "Name": "Alpine Lake Public Utilities",
    "Phone": "",
    "Address": "Alpine Lake Public Utilities 1813 Alpine Lake Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 950,
    "Name": "Alpine Lake Resort",
    "Phone": 3047892481,
    "Address": "Alpine Lake Resort 700 West Alpine Drive Terra Alta WV 26764"
  },
  {
    "Lookup": 960,
    "Name": "Alcorp",
    "Phone": 3047355745,
    "Address": "Alcorp 5247 Auror Pike Aurora WV 26705"
  },
  {
    "Lookup": 962,
    "Name": "Ama Excavating",
    "Phone": 3047355714,
    "Address": "Ama Excavating 2854 Aurora Pike Aurora WV 26705"
  },
  {
    "Lookup": 965,
    "Name": "Rapid RePair",
    "Phone": 3013346243,
    "Address": "Rapid RePair 913 Snowycreek Rd. Oakland MD 21550"
  },
  {
    "Lookup": 985985,
    "Name": "Aristeo Construction Co.",
    "Phone": 7344279111,
    "Address": "Aristeo Construction Co. 12811 Farmington Rd Livonia Mi 48150"
  },
  {
    "Lookup": 990,
    "Name": "Aronholt & Sons",
    "Phone": 3046937096,
    "Address": "Aronholt & Sons Hc 76 Box 510 Mt Storm WV 26739"
  },
  {
    "Lookup": 1070,
    "Name": "Donald Arnett",
    "Phone": 3047355782,
    "Address": "Donald Arnett 6271 Lantz Ridge Rd. Aurora WV 26705"
  },
  {
    "Lookup": 1100,
    "Name": "Cathedral Equipment",
    "Phone": 3042888560,
    "Address": "Cathedral Equipment 5121 Lantz Ridge Rd Aurora WV 26705"
  },
  {
    "Lookup": 1300,
    "Name": "Arnold Brothers Equipment Corp",
    "Phone": 3013349605,
    "Address": "Arnold Brothers Equipment Corp 105 Arnold Lane Mt Lake Park MD 21550"
  },
  {
    "Lookup": 1400,
    "Name": "Arnold Trucking",
    "Phone": "",
    "Address": "Arnold Trucking Rt.1 Box 219C Aurora WV 26705"
  },
  {
    "Lookup": 1450,
    "Name": "Mr. Barry Arnold",
    "Phone": 3047356917,
    "Address": "Mr. Barry Arnold 1522 Cathedral Way Aurora WV 26705"
  },
  {
    "Lookup": 1600,
    "Name": "F.T. Arnold & Sons",
    "Phone": 3013349560,
    "Address": "F.T. Arnold & Sons 741 Dennett Road Oakland MD 21550"
  },
  {
    "Lookup": 1700,
    "Name": "Frank Arnold Contractors Inc.",
    "Phone": 3013342450,
    "Address": "Frank Arnold Contractors Inc. 151 Oakland Dr. Oakland MD 21550"
  },
  {
    "Lookup": 1725,
    "Name": "Todd Arnold Construction",
    "Phone": 3047355113,
    "Address": "Todd Arnold Construction 5280 Maple Spring Hwy. Aurora WV 26705"
  },
  {
    "Lookup": 1760,
    "Name": "Ashby Truck RePair",
    "Phone": 3013344440,
    "Address": "Ashby Truck RePair PO Box 643 Oakland MD 21550"
  },
  {
    "Lookup": 1775,
    "Name": "Arrowhead Machine",
    "Phone": 3047896490,
    "Address": "Arrowhead Machine 1207 Russ Deberry Road Terra Alta WV 26764"
  },
  {
    "Lookup": 1800,
    "Name": "Joe Ashby & Sons",
    "Phone": 3043342577,
    "Address": "Joe Ashby & Sons P.O. Box 305 Oakland MD 21550"
  },
  {
    "Lookup": 2000,
    "Name": "Ashby Fire Equipment",
    "Phone": 3013342193,
    "Address": "Ashby Fire Equipment P.O. Box 208 Oakland MD 21550"
  },
  {
    "Lookup": 2010,
    "Name": "Asplundh Tree Experts",
    "Phone": 3013590467,
    "Address": "Asplundh Tree Experts 316 E. Pennington Street Oakland MD 21550"
  },
  {
    "Lookup": 2015,
    "Name": "Ashby's Tree Farm",
    "Phone": 3013879069,
    "Address": "Ashby's Tree Farm 1646 Swanton Road Swanton MD 21561"
  },
  {
    "Lookup": 2050,
    "Name": "Aurora VFD",
    "Phone": 3047355797,
    "Address": "Aurora VFD 25781 George Washington Hwy. Aurora WV 26705"
  },
  {
    "Lookup": 2100,
    "Name": "Automotive Machine Inc.",
    "Phone": 3013341105,
    "Address": "Automotive Machine Inc. 310 Baltimore Ave. Mt Lake Park MD 21550"
  },
  {
    "Lookup": 2125,
    "Name": "Auto Express",
    "Phone": 3013348446,
    "Address": "Auto Express 109 G Street Mt Lake Park MD 21550"
  },
  {
    "Lookup": 2150,
    "Name": "Auto Shop",
    "Phone": 3046937660,
    "Address": "Auto Shop Box 6 Maple Street Bayard WV 26707"
  },
  {
    "Lookup": 2160,
    "Name": "The Auto Station",
    "Phone": 3013341041,
    "Address": "The Auto Station 12421 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 2175,
    "Name": "Axalta Coating Systems LLC",
    "Phone": "",
    "Address": "Axalta Coating Systems LLC Two CommeRCe Square 2001 Market St. Suite 3600 Philadelphia PA 19103"
  },
  {
    "Lookup": 2195,
    "Name": "BB Custom Airbrush Designs",
    "Phone": 3017073815,
    "Address": "BB Custom Airbrush Designs 23508 Westernport Rd Westernport MD 21562"
  },
  {
    "Lookup": 2200,
    "Name": "B & G Lumber",
    "Phone": 3013344974,
    "Address": "B & G Lumber 112 Potomac Camp Rd. Oakland MD 21550"
  },
  {
    "Lookup": 2225,
    "Name": "B & R Distributing Co.",
    "Phone": 3013341670,
    "Address": "B & R Distributing Co. Rt 6 Box 552 Oakland MD 21550-9603"
  },
  {
    "Lookup": 2295,
    "Name": "Belt Paving Inc.",
    "Phone": "",
    "Address": "Belt Paving Inc. P.O. Box 1002 Cumberland MD 21501"
  },
  {
    "Lookup": 2300,
    "Name": "James P. Belowsky",
    "Phone": 3014533241,
    "Address": "James P. Belowsky 3145 Walnut Bottom Rd. Swanton MD 21561"
  },
  {
    "Lookup": 2410,
    "Name": "Baker's Garage",
    "Phone": 3013341232,
    "Address": "Baker's Garage 1423 Silver Knob Rd. Oakland MD 21550"
  },
  {
    "Lookup": 2425,
    "Name": "Bayard V.F.D.",
    "Phone": 3046989618,
    "Address": "Bayard V.F.D. Box 215 Attn: Felicia Dewitt Bayard WV 26707"
  },
  {
    "Lookup": 2430,
    "Name": "Rolling Hills Farm",
    "Phone": 3047355242,
    "Address": "Rolling Hills Farm 1326 Horse Shoe Run Rd. Eglon WV 26716"
  },
  {
    "Lookup": 2440,
    "Name": "Bachtel Enterprise",
    "Phone": 3047355860,
    "Address": "Bachtel Enterprise 230 Youghiogeny Dr. Aurora WV 26705"
  },
  {
    "Lookup": 2441,
    "Name": "Kenneth Bachtel Mt View Farms",
    "Phone": 3016165570,
    "Address": "Kenneth Bachtel Mt View Farms 605 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 2442,
    "Name": "Backbone Mt On-Off Road",
    "Phone": 3013345701,
    "Address": "Backbone Mt On-Off Road 4707 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 2443,
    "Name": "Backbone Mtn. Performance",
    "Phone": 3048442237,
    "Address": "Backbone Mtn. Performance 111 Spruce St. Davisville WV 26142"
  },
  {
    "Lookup": 2445,
    "Name": "Countryside Lawn Equipment",
    "Phone": 3013343550,
    "Address": "Countryside Lawn Equipment 1158 Shady Dell Road Oakland MD 21550"
  },
  {
    "Lookup": 2450,
    "Name": "O.C. Cluss",
    "Phone": 3013343258,
    "Address": "O.C. Cluss 92 Service Center Dr. Oakland MD 21550"
  },
  {
    "Lookup": 2550,
    "Name": "Beachy Welding",
    "Phone": 3013342726,
    "Address": "Beachy Welding 480 Clifton Drive Deer Park MD 21550"
  },
  {
    "Lookup": 2555,
    "Name": "Beacon Resources Inc",
    "Phone": 8149264250,
    "Address": "Beacon Resources Inc 208 West Mud Pike Rd Rockwood PA 15557"
  },
  {
    "Lookup": 2570,
    "Name": "Mickey Beeman",
    "Phone": 3016169991,
    "Address": "Mickey Beeman 1324 Mount Zion Rd Swanton MD 21561"
  },
  {
    "Lookup": 2590,
    "Name": "Beckley Drilling",
    "Phone": 3042568385,
    "Address": "Beckley Drilling P.O. Box 1907 Beaver WV 25813"
  },
  {
    "Lookup": 2600,
    "Name": "Delbie Beckman",
    "Phone": 3013341201,
    "Address": "Delbie Beckman 7855 Gorman Rd Oakland MD 21550"
  },
  {
    "Lookup": 2605,
    "Name": "Diane Beckman",
    "Phone": 2403216601,
    "Address": "Diane Beckman P.O. Box 2023 Oakland MD 21550"
  },
  {
    "Lookup": 2650,
    "Name": "Keith Beckman",
    "Phone": 3013348448,
    "Address": "Keith Beckman 192 Truesdale Rd Oakland MD 21550"
  },
  {
    "Lookup": 2675,
    "Name": "Kevin Beckman",
    "Phone": "",
    "Address": "Kevin Beckman 514 Maple Avenue Mt Lake Park MD 21550"
  },
  {
    "Lookup": 2700,
    "Name": "Beckman Lumber",
    "Phone": 3013343128,
    "Address": "Beckman Lumber 3832 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 2725,
    "Name": "Beckman Trucking",
    "Phone": 3013343128,
    "Address": "Beckman Trucking 3832 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 2750,
    "Name": "Beckman's Variety Store",
    "Phone": 3013343331,
    "Address": "Beckman's Variety Store 3832 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 2900,
    "Name": "Beitzel Excavating LLC",
    "Phone": 3016162412,
    "Address": "Beitzel Excavating LLC P.O.Box 635 Oakland MD 21550"
  },
  {
    "Lookup": 3000,
    "Name": "Beitzel Corporation",
    "Phone": 3012454107,
    "Address": "Beitzel Corporation Accounts PAyable 333 Corporate Dr Grantsville MD 21536"
  },
  {
    "Lookup": 3175,
    "Name": "Bennetts Truck Parts",
    "Phone": 3016167449,
    "Address": "Bennetts Truck Parts 122 Earl HaUser Rd Oakland MD 21550"
  },
  {
    "Lookup": 3200,
    "Name": "Ryan \"Big Monet\" Bentz",
    "Phone": 2404227732,
    "Address": "Ryan \"Big Monet\" Bentz 18528 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 3225,
    "Name": "Kevin Bernard",
    "Phone": 3016164338,
    "Address": "Kevin Bernard 757 SmoUse Rd Oakland MD 21550"
  },
  {
    "Lookup": 3300,
    "Name": "Deep Creek Metals",
    "Phone": 3018594080,
    "Address": "Deep Creek Metals 2662 Spring Lick Swanton MD 21561"
  },
  {
    "Lookup": 3400,
    "Name": "Bills Marine Service",
    "Phone": 3013875536,
    "Address": "Bills Marine Service 20721 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 3425,
    "Name": "Billy Bender Chevrolet",
    "Phone": 3018955115,
    "Address": "Billy Bender Chevrolet 10355 Mt Savage Rd Nw Cumberland MD 21502"
  },
  {
    "Lookup": 3470,
    "Name": "All Seasons Maintenance",
    "Phone": 3013348133,
    "Address": "All Seasons Maintenance 4684 Hutton Rd. Oakland MD 21550"
  },
  {
    "Lookup": 3500,
    "Name": "BLG Brothers LLC.",
    "Phone": "",
    "Address": "BLG Brothers LLC. 213 Bachtel Ln Eglon WV 26716"
  },
  {
    "Lookup": 3560,
    "Name": "Jessica Bittinger",
    "Phone": "",
    "Address": "Jessica Bittinger 507 E St Mountain Lake Park MD 21550"
  },
  {
    "Lookup": 3595,
    "Name": "Blackwater Falls State Park",
    "Phone": 3042595216,
    "Address": "Blackwater Falls State Park PO Box 490 1584 Blackwater Lodge Rd Davis WV 26260"
  },
  {
    "Lookup": 3600,
    "Name": "Blackwater Motor Company",
    "Phone": 6814359044,
    "Address": "Blackwater Motor Company 13 Tlc Ln Thomas WV 26292"
  },
  {
    "Lookup": 3640,
    "Name": "Terry Blamble Excavating",
    "Phone": 3013344088,
    "Address": "Terry Blamble Excavating 76 Earl HaUser Road Oakland MD 21550"
  },
  {
    "Lookup": 3642,
    "Name": "Bloomington Vol. Fire Dept",
    "Phone": 3013593729,
    "Address": "Bloomington Vol. Fire Dept P.O. Box 12 Bloomington MD 21523"
  },
  {
    "Lookup": 3644,
    "Name": "Blue RiBBon Lumber",
    "Phone": 3013345810,
    "Address": "Blue RiBBon Lumber 1679 Blue RiBBon Road Oakland MD 21550"
  },
  {
    "Lookup": 3645,
    "Name": "Blue RiBBon Pallet",
    "Phone": 3013345810,
    "Address": "Blue RiBBon Pallet 1679 Blue RiBBon Road Oakland MD 21550"
  },
  {
    "Lookup": 3650,
    "Name": "Blums Auto RePair",
    "Phone": 3013348716,
    "Address": "Blums Auto RePair 153 Blueberry Lane Oakland MD 21550"
  },
  {
    "Lookup": 3700,
    "Name": "Bob's Auto RePair",
    "Phone": 3013344421,
    "Address": "Bob's Auto RePair 345 Crellin Mine Rd. Oakland MD 21550"
  },
  {
    "Lookup": 3900,
    "Name": "Bob's Garage & Auto Sales",
    "Phone": 3044359251,
    "Address": "Bob's Garage & Auto Sales 33946 Veterans Memorial Hwy. Terra Alta WV 26764"
  },
  {
    "Lookup": 3925,
    "Name": "Bobs Ginseng",
    "Phone": 3046937544,
    "Address": "Bobs Ginseng 7943 Union Hwy Mt Storm WV 26739"
  },
  {
    "Lookup": 3930,
    "Name": "Dan Boone",
    "Phone": "",
    "Address": "Dan Boone 103 White Dale ChuRCh Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 3950,
    "Name": "Leroy Bolding",
    "Phone": 3013344757,
    "Address": "Leroy Bolding 1740 Garrett Road Oakland MD 21550"
  },
  {
    "Lookup": 3955,
    "Name": "Leroy's Garage And Trucking LLC",
    "Phone": 3048132778,
    "Address": "Leroy's Garage And Trucking LLC 130 Dump Truck Lane Mount Storm WV 26739"
  },
  {
    "Lookup": 3975,
    "Name": "Jeremy S. Bolyard Construction",
    "Phone": 3016167590,
    "Address": "Jeremy S. Bolyard Construction P.O. Box 95 Bayard WV 26707"
  },
  {
    "Lookup": 4000,
    "Name": "Borderline Sales & Service",
    "Phone": 3013346444,
    "Address": "Borderline Sales & Service 632 George Washington Hy Oakland MD 21550"
  },
  {
    "Lookup": 4050,
    "Name": "Bosley Construction",
    "Phone": 3013870069,
    "Address": "Bosley Construction 731 Lakeshore Dr. Oakland MD 21550"
  },
  {
    "Lookup": 4055,
    "Name": "Diggers Construction",
    "Phone": 3043294055,
    "Address": "Diggers Construction 14642 S. Prestion Hwy Kingwood WV 26537"
  },
  {
    "Lookup": 4060,
    "Name": "Boyce Auto Electric",
    "Phone": 3016162552,
    "Address": "Boyce Auto Electric 5626 Saltlick Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 4150,
    "Name": "Mr. Vincent E. Bowman",
    "Phone": 3015330992,
    "Address": "Mr. Vincent E. Bowman 1070 Sunrise Drive Oakland MD 21550"
  },
  {
    "Lookup": 4300,
    "Name": "Brad's Auto RePair",
    "Phone": 3017464033,
    "Address": "Brad's Auto RePair P.O. Box 395 Friendsville MD 21531"
  },
  {
    "Lookup": 4500,
    "Name": "Brenneman Well Drilling Inc.",
    "Phone": 3018268111,
    "Address": "Brenneman Well Drilling Inc. P.O. Bx 245 Accident MD 21520"
  },
  {
    "Lookup": 4600,
    "Name": "Broadwater RePair",
    "Phone": 3013878171,
    "Address": "Broadwater RePair 4232 Sandflat Rd. Oakland MD 21550"
  },
  {
    "Lookup": 4725,
    "Name": "Broadwater Towing",
    "Phone": 3018954244,
    "Address": "Broadwater Towing 159 Chestnut Ridge Rd. Grantsville MD 21536"
  },
  {
    "Lookup": 4900,
    "Name": "Brookside Trucking",
    "Phone": 3016163161,
    "Address": "Brookside Trucking 25973 George Washington Hwy Aurora WV 26705"
  },
  {
    "Lookup": 4915,
    "Name": "Mr Donnie G. Brown",
    "Phone": "",
    "Address": "Mr Donnie G. Brown Rt.3 Box 210K Gormania WV 26720"
  },
  {
    "Lookup": 4920,
    "Name": "Mr. Gary D. Brown",
    "Phone": 3046937323,
    "Address": "Mr. Gary D. Brown Rt. 1 Box 205A3 Gormania WV 26720"
  },
  {
    "Lookup": 4925,
    "Name": "Mr. Roger L. Brown Sr.",
    "Phone": 3013341549,
    "Address": "Mr. Roger L. Brown Sr. 4445 Maryland Hgy. Oakland MD 21550"
  },
  {
    "Lookup": 4985,
    "Name": "Brodak's Discount Liqours",
    "Phone": 3013342671,
    "Address": "Brodak's Discount Liqours 12743 Garrett Hwy Suite 1 Oakland MD 21550"
  },
  {
    "Lookup": 5000,
    "Name": "Brownings Auto Sales",
    "Phone": 3013343270,
    "Address": "Brownings Auto Sales 9 ChuRCh Street Oakland MD 21550"
  },
  {
    "Lookup": 5200,
    "Name": "Oakland Shop N Save",
    "Phone": 3013348105,
    "Address": "Oakland Shop N Save 406 Weber Road Oakland MD 21550"
  },
  {
    "Lookup": 5325,
    "Name": "Bryan's Autobody",
    "Phone": 3047896249,
    "Address": "Bryan's Autobody 24 Greggs Knob Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 5400,
    "Name": "Buddy's Used Cars LLC",
    "Phone": 3013876455,
    "Address": "Buddy's Used Cars LLC 19326 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 5450,
    "Name": "Burns Auto Care",
    "Phone": 3046212494,
    "Address": "Burns Auto Care 36 Belden Dr Thomas WV 26292"
  },
  {
    "Lookup": 5460,
    "Name": "Burns Industrial Equipment",
    "Phone": "",
    "Address": "Burns Industrial Equipment 210 Thorm Hill Road Warrendale PA 15086"
  },
  {
    "Lookup": 5660,
    "Name": "Larry Burdick",
    "Phone": 3047896864,
    "Address": "Larry Burdick 127 Terra Alta Lake Road Terra Alta WV 26764"
  },
  {
    "Lookup": 5700,
    "Name": "Art Butler Auto Sales",
    "Phone": 3017468227,
    "Address": "Art Butler Auto Sales 33728 Garrett Hwy Accident MD 21520"
  },
  {
    "Lookup": 5900,
    "Name": "Butler General Hauling",
    "Phone": 3013349677,
    "Address": "Butler General Hauling 311 Mayer Ave. Terra Alta WV 26764"
  },
  {
    "Lookup": 5975,
    "Name": "Butler Painting",
    "Phone": 3016163041,
    "Address": "Butler Painting 985 Garrett Rd Oakland MD 21550"
  },
  {
    "Lookup": 6000,
    "Name": "Mr. Bill Butler",
    "Phone": "",
    "Address": "Mr. Bill Butler 810 Sunnyside Rd. Oakland MD 21550"
  },
  {
    "Lookup": 6130,
    "Name": "Butts Garage",
    "Phone": 3013349204,
    "Address": "Butts Garage 179 Gorman Street Oakland MD 21550"
  },
  {
    "Lookup": 6135,
    "Name": "C & A Hauling",
    "Phone": 3013344896,
    "Address": "C & A Hauling 398 Harley Lane Oakland MD 21550"
  },
  {
    "Lookup": 6175,
    "Name": "C & J Hartsell Trucking LLC",
    "Phone": 3016168687,
    "Address": "C & J Hartsell Trucking LLC Rt.3 Box 77 Terra Alta WV 26764"
  },
  {
    "Lookup": 6200,
    "Name": "C M Used Cars",
    "Phone": 3047353013,
    "Address": "C M Used Cars Rr 1 Box 357 Aurora WV 26705"
  },
  {
    "Lookup": 6225,
    "Name": "C.N. Metals",
    "Phone": 3013349170,
    "Address": "C.N. Metals 762 Joni Miller Road Oakland MD 21550"
  },
  {
    "Lookup": 6250,
    "Name": "C & R Trees",
    "Phone": 3047896648,
    "Address": "C & R Trees 609 Feather Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 6255,
    "Name": "CRB Timber",
    "Phone": 3046925721,
    "Address": "CRB Timber 653 Feather Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 6300,
    "Name": "CMC Enterprises",
    "Phone": 3046937128,
    "Address": "CMC Enterprises Hc 76 Mt Storm WV 26739"
  },
  {
    "Lookup": 6400,
    "Name": "CMC",
    "Phone": 3013876209,
    "Address": "CMC 103 Railcar Lane Swanton MD 21561"
  },
  {
    "Lookup": 6500,
    "Name": "CSX Equipment",
    "Phone": 8042267456,
    "Address": "CSX Equipment 1 CSX Road Richmond VA 23230"
  },
  {
    "Lookup": 6520,
    "Name": "CSXT Justin Bishop",
    "Phone": 3042650787,
    "Address": "CSXT Justin Bishop 599 CSX Way Grafton WV 26354"
  },
  {
    "Lookup": 6525,
    "Name": "CSXT Josh Hagan",
    "Phone": 3046772025,
    "Address": "CSXT Josh Hagan 300 Mineral St. Keyser WV 26726"
  },
  {
    "Lookup": 6620,
    "Name": "Suddenlink Communications",
    "Phone": 3044724193,
    "Address": "Suddenlink Communications 68 Fifth Street Buckhannon WV 26201"
  },
  {
    "Lookup": 6625,
    "Name": "Mr Cecil A. Calcamp Jr.",
    "Phone": 3046937072,
    "Address": "Mr Cecil A. Calcamp Jr. Hc 76 Box 48 Mt Storm WV 26739"
  },
  {
    "Lookup": 6626,
    "Name": "Bryan Calhoun",
    "Phone": "",
    "Address": "Bryan Calhoun 697 Monte Vista Rd Oakland MD 21550"
  },
  {
    "Lookup": 6635,
    "Name": "Callis' Auto Detailing",
    "Phone": 3013344189,
    "Address": "Callis' Auto Detailing 4343 Maryland Hgy. Oakland MD 21550"
  },
  {
    "Lookup": 6638,
    "Name": "CalVary Logging LLC",
    "Phone": 3016169875,
    "Address": "CalVary Logging LLC 315 Lemoyne King Rd Oakland MD 21550"
  },
  {
    "Lookup": 6639,
    "Name": "Cardinal Hill Woodworking",
    "Phone": 3016161784,
    "Address": "Cardinal Hill Woodworking 89 Swantamont Rd Swanton MD 21561"
  },
  {
    "Lookup": 6640,
    "Name": "Caney VAlley Marine",
    "Phone": 7243298700,
    "Address": "Caney VAlley Marine 161 Caney VAlley Rd Markleysburg PA 15459"
  },
  {
    "Lookup": 6650,
    "Name": "Carquest Auto Parts",
    "Phone": 3018953118,
    "Address": "Carquest Auto Parts P.O. Box 337 Grantsville MD 21536"
  },
  {
    "Lookup": 6660,
    "Name": "Carroll Harvey Contracting",
    "Phone": 3013346156,
    "Address": "Carroll Harvey Contracting 409 I St Mountain Lake Park MD 21550"
  },
  {
    "Lookup": 6670,
    "Name": "Carl Belt Inc.",
    "Phone": 3017298900,
    "Address": "Carl Belt Inc. P.O. Box 1210 Cumberland MD 21501"
  },
  {
    "Lookup": 6671,
    "Name": "Doug Thayer",
    "Phone": 1,
    "Address": "Doug Thayer 107 Cemetery Hill Road Swanton MD 21561"
  },
  {
    "Lookup": 6672,
    "Name": "Rick Carvell",
    "Phone": 3013879025,
    "Address": "Rick Carvell P.O. Box 143 Swanton MD 21561"
  },
  {
    "Lookup": 6675,
    "Name": "Bill Casteel",
    "Phone": 3047892774,
    "Address": "Bill Casteel Rt. 1 Box43B6 Terra Alta WV 26764"
  },
  {
    "Lookup": 6710,
    "Name": "Chapman Garage",
    "Phone": 3046937404,
    "Address": "Chapman Garage P.O. Box 130 Mt Storm WV 26739"
  },
  {
    "Lookup": 6720,
    "Name": "Chapman Hauling",
    "Phone": 3013341473,
    "Address": "Chapman Hauling 208 W. 2Nd Ave. Mt Lake Park MD 21550"
  },
  {
    "Lookup": 6730,
    "Name": "Chapman Timber",
    "Phone": 3044465438,
    "Address": "Chapman Timber Rt.1 Box 151 Elk Garden WV 26717"
  },
  {
    "Lookup": 6750,
    "Name": "Chase Ashby",
    "Phone": 3013876236,
    "Address": "Chase Ashby 1648 Swaton Rd Swanton MD 21561"
  },
  {
    "Lookup": 6770,
    "Name": "Chase Trucking LLC",
    "Phone": 3047896315,
    "Address": "Chase Trucking LLC 1491 Brandonville Pike Terra Alta WV 26764"
  },
  {
    "Lookup": 6775,
    "Name": "MGM Rentals",
    "Phone": 3013344963,
    "Address": "MGM Rentals 2294 Old Crellin Rd. Oakland MD 21550"
  },
  {
    "Lookup": 6800,
    "Name": "Cherry Creek Enterprises",
    "Phone": 3013345824,
    "Address": "Cherry Creek Enterprises 143 Cherry Creek Lane Oakland MD 21550"
  },
  {
    "Lookup": 6950,
    "Name": "Chestnut Ridge Nursery",
    "Phone": 3018953194,
    "Address": "Chestnut Ridge Nursery Po. Box 84 Grantsville MD 21536"
  },
  {
    "Lookup": 7000,
    "Name": "Christian Car Care",
    "Phone": 3013878318,
    "Address": "Christian Car Care 3200 Sand Flat Road Oakland MD 21550"
  },
  {
    "Lookup": 7100,
    "Name": "Clark's Exxon Service Center",
    "Phone": 3046937520,
    "Address": "Clark's Exxon Service Center P.O. Box 233 Mt Storm WV 26739"
  },
  {
    "Lookup": 7125,
    "Name": "City Of Kingwood",
    "Phone": 3043291225,
    "Address": "City Of Kingwood 313 Tunnelton St Kingwood WV 26537"
  },
  {
    "Lookup": 7130,
    "Name": "City Of Thomas",
    "Phone": 3044634360,
    "Address": "City Of Thomas P.O Box 248 Thomas WV 26292"
  },
  {
    "Lookup": 7150,
    "Name": "Classie Car Company",
    "Phone": 3013344995,
    "Address": "Classie Car Company 53 High View Dr. Oakland MD 21550"
  },
  {
    "Lookup": 7160,
    "Name": "Chloma Farms LLC",
    "Phone": 3013344705,
    "Address": "Chloma Farms LLC 216 Chloma Lane Oakland MD 21550"
  },
  {
    "Lookup": 7175,
    "Name": "Coastal Lumber Company",
    "Phone": 3047356701,
    "Address": "Coastal Lumber Company Rt. 1 Box 295 Horseshoe Run WV 26716"
  },
  {
    "Lookup": 7190,
    "Name": "Clay Cam Logging LLC",
    "Phone": "",
    "Address": "Clay Cam Logging LLC Rr 2 Box 63A Moatsville WV 26405"
  },
  {
    "Lookup": 7350,
    "Name": "Columbia Gas & Transmission",
    "Phone": 3047893040,
    "Address": "Columbia Gas & Transmission 8251 Aurora Pike Terra Alta WV 26764"
  },
  {
    "Lookup": 7400,
    "Name": "Community Action Weatherizatio",
    "Phone": 3013349431,
    "Address": "Community Action Weatherizatio 104 East Center St. Oakland MD 21550"
  },
  {
    "Lookup": 7450,
    "Name": "Complete Trucking & Transport Ll",
    "Phone": "",
    "Address": "Complete Trucking & Transport Ll 4768 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 7452,
    "Name": "Cook's Auto Body",
    "Phone": 3048147697,
    "Address": "Cook's Auto Body 100 Gardener's Lane New Creek WV 26743"
  },
  {
    "Lookup": 7453,
    "Name": "The Computer Shop",
    "Phone": 2403212244,
    "Address": "The Computer Shop 13179 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 7455,
    "Name": "Corks Cars",
    "Phone": 3013340601,
    "Address": "Corks Cars 10012 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 7460,
    "Name": "Cosner Logging",
    "Phone": "",
    "Address": "Cosner Logging Hc 76 Box 250 Mt Storm WV 26739"
  },
  {
    "Lookup": 7465,
    "Name": "Cosner Trucking",
    "Phone": 3016165897,
    "Address": "Cosner Trucking 23 East Water St. Oakland MD 21550"
  },
  {
    "Lookup": 7468,
    "Name": "Country Roads Transport",
    "Phone": 3046989799,
    "Address": "Country Roads Transport 188 Ridnour Rd Morgantown WV 26508"
  },
  {
    "Lookup": 7470,
    "Name": "Country Services Contacting LLC",
    "Phone": 3047896876,
    "Address": "Country Services Contacting LLC 6833 Cranesville Road Terra Alta WV 26764"
  },
  {
    "Lookup": 7477,
    "Name": "Cranesville Quarry - Keystone",
    "Phone": "",
    "Address": "Cranesville Quarry - Keystone P.O. Box 318 Kingwood WV 26537"
  },
  {
    "Lookup": 7482,
    "Name": "Crellin Assembly Of God",
    "Phone": 3013343867,
    "Address": "Crellin Assembly Of God 2220 Hutton Rd Oakland MD 21550"
  },
  {
    "Lookup": 7485,
    "Name": "Crimson Shamrock LLC",
    "Phone": 3047356413,
    "Address": "Crimson Shamrock LLC 893 Eglon Rd Eglon WV 26716"
  },
  {
    "Lookup": 7500,
    "Name": "Cumberland Concrete Inc.",
    "Phone": 3013876300,
    "Address": "Cumberland Concrete Inc. P.O. Box 3369 Lavale MD 21502"
  },
  {
    "Lookup": 7600,
    "Name": "Mr Kenn R. Cummings",
    "Phone": 3013348551,
    "Address": "Mr Kenn R. Cummings 6285 George Wash. Highway Oakland MD 21550"
  },
  {
    "Lookup": 7650,
    "Name": "Charles Custer",
    "Phone": 3016169924,
    "Address": "Charles Custer 378 Green Gables Road Friendsville MD 21531"
  },
  {
    "Lookup": 7700,
    "Name": "Mr. Leo Custer",
    "Phone": 3013875751,
    "Address": "Mr. Leo Custer 6148 Maryland Hwy Oakland MD 21550"
  },
  {
    "Lookup": 7800,
    "Name": "Mr Leonard Custer",
    "Phone": 3015016712,
    "Address": "Mr Leonard Custer 864 N Glade Rd Swanton MD 21561"
  },
  {
    "Lookup": 7815,
    "Name": "Custom Touch",
    "Phone": 3013348784,
    "Address": "Custom Touch 1225 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 7975,
    "Name": "Darvin Gank",
    "Phone": 3013342735,
    "Address": "Darvin Gank 337 Dinky Track Rd Oakland MD 21550"
  },
  {
    "Lookup": 7979,
    "Name": "D & D Motors",
    "Phone": 3014632200,
    "Address": "D & D Motors 19521 New George's Creek Rd Barton MD 21521"
  },
  {
    "Lookup": 7980,
    "Name": "D & B Auto",
    "Phone": 3013346990,
    "Address": "D & B Auto 6 Bahia Ct. Ocala Fl 34472"
  },
  {
    "Lookup": 7985,
    "Name": "D & B Welding & Fabrication",
    "Phone": 3017864667,
    "Address": "D & B Welding & Fabrication 23816 Old Stables Rd. Sw. Rawlings MD 21557"
  },
  {
    "Lookup": 7986,
    "Name": "D & E Auto Sales Inc",
    "Phone": 3047896223,
    "Address": "D & E Auto Sales Inc 32202 Veterans Memorial Hwy Terra Alta WV 26764"
  },
  {
    "Lookup": 7987,
    "Name": "D & E Body Shop",
    "Phone": 3013346033,
    "Address": "D & E Body Shop 172 Gank Rd. Crellin MD 21550"
  },
  {
    "Lookup": 7988,
    "Name": "D & E Transport LLC",
    "Phone": 3044634810,
    "Address": "D & E Transport LLC 318 PieRCe Benbush Rd Thomas WV 26292"
  },
  {
    "Lookup": 7990,
    "Name": "D & J Timber",
    "Phone": 3013593764,
    "Address": "D & J Timber 18272 Maryland Highway Swanton MD 21561"
  },
  {
    "Lookup": 7992,
    "Name": "D & M Services",
    "Phone": 3016164002,
    "Address": "D & M Services 8018 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 7993,
    "Name": "D & M Stone",
    "Phone": 3016164745,
    "Address": "D & M Stone 201 Pee Wee Rd. Kitzmiller MD 21538"
  },
  {
    "Lookup": 7995,
    "Name": "D & R Distributors",
    "Phone": 3043291191,
    "Address": "D & R Distributors P.O. Box 1176 Kingwood WV 26537"
  },
  {
    "Lookup": 7998,
    "Name": "D & S Logging",
    "Phone": 3012454078,
    "Address": "D & S Logging 13205 Bittinger Rd. Grantsville MD 21536"
  },
  {
    "Lookup": 8000,
    "Name": "D & S Trucking Co.",
    "Phone": 3013342828,
    "Address": "D & S Trucking Co. 209 N 11Th Street Oakland MD 21550-1438"
  },
  {
    "Lookup": 8050,
    "Name": "Dale's Body Shop",
    "Phone": 3013349661,
    "Address": "Dale's Body Shop P.O. 3138 Deer Park MD 21550"
  },
  {
    "Lookup": 8100,
    "Name": "Dan's Marine Service Inc",
    "Phone": 3042650188,
    "Address": "Dan's Marine Service Inc 226 N Pike St Grafton WV 26354"
  },
  {
    "Lookup": 8200,
    "Name": "Dave's Body Shop",
    "Phone": 3013348752,
    "Address": "Dave's Body Shop Rt.1 Box 360 J Oakland MD 21550"
  },
  {
    "Lookup": 8250,
    "Name": "David's Automotive RePair",
    "Phone": 3047896309,
    "Address": "David's Automotive RePair 2347 Alpine Lake Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 8400,
    "Name": "Mr. Doug Davis",
    "Phone": 3013879005,
    "Address": "Mr. Doug Davis 3325 Sand Flat Rd. Oakland MD 21550"
  },
  {
    "Lookup": 8450,
    "Name": "Dawson Garage",
    "Phone": "",
    "Address": "Dawson Garage Box 235 Oak Street Elk Garden WV 26717"
  },
  {
    "Lookup": 8455,
    "Name": "Dylan Dawson",
    "Phone": 3018595153,
    "Address": "Dylan Dawson 591 Calderwood Rd Oakland MD 21550"
  },
  {
    "Lookup": 8460,
    "Name": "Dcl Hvac Solutions",
    "Phone": 2403216677,
    "Address": "Dcl Hvac Solutions 1430 Wilson Rd Oakland MD 21550"
  },
  {
    "Lookup": 5471,
    "Name": "Deep Creek Lanes",
    "Phone": 3013343040,
    "Address": "Deep Creek Lanes 499 Oakland Drive Oakland MD 21550"
  },
  {
    "Lookup": 8480,
    "Name": "Deep Creek Marina",
    "Phone": 3013876977,
    "Address": "Deep Creek Marina 2010 Deep Creek Drq Mc Henry MD 21541"
  },
  {
    "Lookup": 8490,
    "Name": "Deep Creek Metal Sales",
    "Phone": 3018594080,
    "Address": "Deep Creek Metal Sales 2662 Spring Lick Rd Swanton MD 21561"
  },
  {
    "Lookup": 8500,
    "Name": "Deep Creek Mobil Lube",
    "Phone": 3013876767,
    "Address": "Deep Creek Mobil Lube 17869 Suite H Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 8550,
    "Name": "Deep Creek Trucking Company",
    "Phone": 3013875560,
    "Address": "Deep Creek Trucking Company 2867 Oakland/Sang Run Rd Oakland MD 21550"
  },
  {
    "Lookup": 8600,
    "Name": "Deep Creek Vol. Fire Co.",
    "Phone": 3013875252,
    "Address": "Deep Creek Vol. Fire Co. 1906 Deep Creek Dr. Mchenry MD 21541"
  },
  {
    "Lookup": 8640,
    "Name": "Deer Park Auto Body",
    "Phone": 3013349321,
    "Address": "Deer Park Auto Body 424 Edgewood Dr. Deer Park MD 21550"
  },
  {
    "Lookup": 8675,
    "Name": "Martin Auto Parts",
    "Phone": 3013348340,
    "Address": "Martin Auto Parts 1076 Pysell Crosscut Rd. Oakland MD 21550"
  },
  {
    "Lookup": 8700,
    "Name": "Deer Park Community V.F.D. Inc",
    "Phone": 3013876662,
    "Address": "Deer Park Community V.F.D. Inc P.O. Box 3152 Deer Park MD 21550"
  },
  {
    "Lookup": 8725,
    "Name": "Deer Park Spring Water",
    "Phone": 3013342124,
    "Address": "Deer Park Spring Water 104 Hotel Drive Oakland MD 21550"
  },
  {
    "Lookup": 8730,
    "Name": "Little John Blacksmith",
    "Phone": 3048233654,
    "Address": "Little John Blacksmith Rt. 1 Box 161 Montrose WV 26283"
  },
  {
    "Lookup": 8750,
    "Name": "Deerwood Service Center",
    "Phone": 3047353333,
    "Address": "Deerwood Service Center Rr 1 Aurora WV 26705"
  },
  {
    "Lookup": 8775,
    "Name": "Mr. John Delaney",
    "Phone": 3046937159,
    "Address": "Mr. John Delaney Rt.3 Box 209C Gormania WV 26720"
  },
  {
    "Lookup": 8785,
    "Name": "Delano's Inc.",
    "Phone": 3047896966,
    "Address": "Delano's Inc. 31658 Veterans Memorial Hwy Terra Alta WV 26764"
  },
  {
    "Lookup": 8840,
    "Name": "Denrock Excavating",
    "Phone": 3013343146,
    "Address": "Denrock Excavating 133 Tannery Road Oakland MD 21550"
  },
  {
    "Lookup": 8875,
    "Name": "D.N.R. Forest & Park",
    "Phone": "",
    "Address": "D.N.R. Forest & Park Tawes State Office Build. Annapolis MD 21401"
  },
  {
    "Lookup": 8950,
    "Name": "Beth Friend",
    "Phone": 3013343620,
    "Address": "Beth Friend 1624 4th Street Waynesboro VA 22980"
  },
  {
    "Lookup": 9000,
    "Name": "Diehl's Ford Sales",
    "Phone": 3018955135,
    "Address": "Diehl's Ford Sales P.O. Box 547 Grantsville MD 21536"
  },
  {
    "Lookup": 9050,
    "Name": "Mr. David W. Dewitt",
    "Phone": 3013344636,
    "Address": "Mr. David W. Dewitt 1239 SmoUse Rd. Oakland MD 21550"
  },
  {
    "Lookup": 9100,
    "Name": "Didiwick Logging",
    "Phone": 3046937064,
    "Address": "Didiwick Logging P.O. Box 103 Mt Storm WV 26739"
  },
  {
    "Lookup": 9230,
    "Name": "Dilley & Asso.",
    "Phone": 3016163218,
    "Address": "Dilley & Asso. 452 Dilley Rd Oakland MD 21550"
  },
  {
    "Lookup": 9240,
    "Name": "Mr. Eugene Dilley",
    "Phone": 3013349773,
    "Address": "Mr. Eugene Dilley St. Rt. 2 Box 16D Oakland MD 21550"
  },
  {
    "Lookup": 9245,
    "Name": "Steve Dilley",
    "Phone": 3016164265,
    "Address": "Steve Dilley 312 Thunderhead Road Oakland MD 21550"
  },
  {
    "Lookup": 9277,
    "Name": "Dirt Works",
    "Phone": 3013345665,
    "Address": "Dirt Works 6042 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 9280,
    "Name": "Discount Cabinets & More",
    "Phone": 3013345656,
    "Address": "Discount Cabinets & More 3648 Swanton Road Swanton MD 21561"
  },
  {
    "Lookup": 9285,
    "Name": "Dixon Automotive",
    "Phone": 3047355459,
    "Address": "Dixon Automotive P.O. Box 114 Aurora WV 26705"
  },
  {
    "Lookup": 9295,
    "Name": "Aron Dolly",
    "Phone": 3045821872,
    "Address": "Aron Dolly PO Box 52 Gormania WV 26720"
  },
  {
    "Lookup": 9296,
    "Name": "Tommy Dolly",
    "Phone": 2403211961,
    "Address": "Tommy Dolly 1133 Bane Cut Off Rd Elk Garden WV 26717"
  },
  {
    "Lookup": 9300,
    "Name": "Deer Park Signs",
    "Phone": 3013341344,
    "Address": "Deer Park Signs 4162 Maryland Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 9400,
    "Name": "Doug's Auto & Truck RePair",
    "Phone": 3013348892,
    "Address": "Doug's Auto & Truck RePair 109 West Second Ave Mt Lake Park MD 21550"
  },
  {
    "Lookup": 9425,
    "Name": "Double M Recycling",
    "Phone": 3015333500,
    "Address": "Double M Recycling 406 Swanton Rd Swanton MD 21561"
  },
  {
    "Lookup": 9450,
    "Name": "Double R Ranch",
    "Phone": "",
    "Address": "Double R Ranch 237 Bill Roth Rd Eglon WV 26716"
  },
  {
    "Lookup": 9475,
    "Name": "Dragon Timber",
    "Phone": 3016166949,
    "Address": "Dragon Timber 236 Doc Bernard Rd Oakland MD 21550"
  },
  {
    "Lookup": 9500,
    "Name": "P&M Services",
    "Phone": 3016167002,
    "Address": "P&M Services 616 Norris Welch Rd Oakland MD 21550"
  },
  {
    "Lookup": 9600,
    "Name": "PAula Dove",
    "Phone": 3013343474,
    "Address": "PAula Dove P.O. Box 64 Oakland MD 21550"
  },
  {
    "Lookup": 9650,
    "Name": "Mr. Charlie Drennan Iii",
    "Phone": 3015016485,
    "Address": "Mr. Charlie Drennan Iii 406 Leighton Dr Oakland MD 21550"
  },
  {
    "Lookup": 9700,
    "Name": "Waters Run Enterprise",
    "Phone": 3012454218,
    "Address": "Waters Run Enterprise 3044 Dry Run Rd. Swanton MD 21561"
  },
  {
    "Lookup": 9725,
    "Name": "Axalta Paint",
    "Phone": "",
    "Address": "Axalta Paint P.O. Box 8500 Philadelphia PA 19178"
  },
  {
    "Lookup": 9759,
    "Name": "Durst Farms",
    "Phone": 3046987005,
    "Address": "Durst Farms 7023 Lantz Ridge Rd Aurora WV 26705"
  },
  {
    "Lookup": 9760,
    "Name": "Durst Plumbing & Heating",
    "Phone": 3018955902,
    "Address": "Durst Plumbing & Heating 842 Chestnut Ridge Rd. Grantsville MD 21536"
  },
  {
    "Lookup": 9780,
    "Name": "E & S General Contracting",
    "Phone": 3013874556,
    "Address": "E & S General Contracting 1691 Swallow Falls Road Oakland MD 21550"
  },
  {
    "Lookup": 9800,
    "Name": "PAul Everly",
    "Phone": 3013342940,
    "Address": "PAul Everly 514 E Street Mt Lake Park MD 21550"
  },
  {
    "Lookup": 9801,
    "Name": "E-Z Excavating LLC",
    "Phone": 2403210524,
    "Address": "E-Z Excavating LLC 1499 Gnegy ChuRCh Rd Oakland MD 21550"
  },
  {
    "Lookup": 9900,
    "Name": "Eastern Horizon",
    "Phone": 3016162904,
    "Address": "Eastern Horizon 281 SmoUse Road Oakland MD 21550"
  },
  {
    "Lookup": 9915,
    "Name": "East Preston Tire",
    "Phone": 3047896700,
    "Address": "East Preston Tire P.O. Box 12 Terra Alta WV 26764"
  },
  {
    "Lookup": 9975,
    "Name": "George C. Edwards",
    "Phone": "",
    "Address": "George C. Edwards P.O. Boc 658 Grantsville MD 21536"
  },
  {
    "Lookup": 10000,
    "Name": "Eglon Farm Service Inc.",
    "Phone": 3047353761,
    "Address": "Eglon Farm Service Inc. P.O. Box 98 Eglon WV 26716"
  },
  {
    "Lookup": 10100,
    "Name": "Eisentrouts Used Cars",
    "Phone": 3013349160,
    "Address": "Eisentrouts Used Cars 3793 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 10150,
    "Name": "Elaine's Auto Detailing",
    "Phone": 3013343666,
    "Address": "Elaine's Auto Detailing 1865 Silver Knob Road Oakland MD 21550"
  },
  {
    "Lookup": 10170,
    "Name": "The End Zone",
    "Phone": 3047895050,
    "Address": "The End Zone 34001 Veterans Memorial Hwy Terra Alta WV 26764"
  },
  {
    "Lookup": 10175,
    "Name": "Ennstone Inc T/A Deep Creek",
    "Phone": 3013878220,
    "Address": "Ennstone Inc T/A Deep Creek P.O. Box 6090 Falmoth VA 22403"
  },
  {
    "Lookup": 10200,
    "Name": "Dale E. Evans School Bus Accou",
    "Phone": 3013343748,
    "Address": "Dale E. Evans School Bus Accou 3450 Maryland Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 10230,
    "Name": "Evans Logging",
    "Phone": 3047353027,
    "Address": "Evans Logging 3952 Seneca Trl Eglon WV 26716"
  },
  {
    "Lookup": 10245,
    "Name": "Ervin's Tree Removal",
    "Phone": 3013344960,
    "Address": "Ervin's Tree Removal 515 Decost Rd. Oakland MD 21550"
  },
  {
    "Lookup": 10247,
    "Name": "Evans Store",
    "Phone": 3047497252,
    "Address": "Evans Store General Delivery Scherr WV 26726"
  },
  {
    "Lookup": 10255,
    "Name": "Evans Trucking LLC",
    "Phone": 3047353027,
    "Address": "Evans Trucking LLC 3952 Seneca Trl Eglon WV 26716"
  },
  {
    "Lookup": 10270,
    "Name": "Everson Resources",
    "Phone": 3046986829,
    "Address": "Everson Resources P.O. Box 606 Kingwood WV 26537"
  },
  {
    "Lookup": 10275,
    "Name": "Excavating By Dan Baker",
    "Phone": 3013875013,
    "Address": "Excavating By Dan Baker P.O. Box 95 Oakland MD 21550"
  },
  {
    "Lookup": 10282,
    "Name": "Explosives Experts Inc",
    "Phone": 4107850100,
    "Address": "Explosives Experts Inc P.O. Box 718 Parkton MD 21120-0718"
  },
  {
    "Lookup": 10400,
    "Name": "Fairfax Materials, Inc.",
    "Phone": 3013348101,
    "Address": "Fairfax Materials, Inc. 8490 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 10425,
    "Name": "Fairfax Machine & Welding",
    "Phone": 3044634230,
    "Address": "Fairfax Machine & Welding 41 Quail Ridge Dr Thomas WV 26292"
  },
  {
    "Lookup": 10430,
    "Name": "Fast Freddy's LLC",
    "Phone": 3047356500,
    "Address": "Fast Freddy's LLC 27354 George Washington Hwy Aurora WV 26705"
  },
  {
    "Lookup": 10450,
    "Name": "Faith Evangelical Free ChuRCh",
    "Phone": 3013344172,
    "Address": "Faith Evangelical Free ChuRCh 1009 Maryland Highway Mt Lake Park MD 21550"
  },
  {
    "Lookup": 10490,
    "Name": "Feather Trucking",
    "Phone": 3043799226,
    "Address": "Feather Trucking 2388 Beach Run Rd. Albright WV 26519"
  },
  {
    "Lookup": 10500,
    "Name": "Mr. Phillip Ferguson Jr",
    "Phone": 3049401803,
    "Address": "Mr. Phillip Ferguson Jr 521 Ferguson Rd Oakland MD 21550"
  },
  {
    "Lookup": 10575,
    "Name": "Mr. Phillip R. Fike",
    "Phone": 3047355146,
    "Address": "Mr. Phillip R. Fike 232 Fike Drive Aurora WV 26705"
  },
  {
    "Lookup": 10600,
    "Name": "Fike Nursery",
    "Phone": 3047892309,
    "Address": "Fike Nursery Rr1 Box 404 Corinth WV 26764"
  },
  {
    "Lookup": 10625,
    "Name": "Fike Trucking",
    "Phone": 3047892309,
    "Address": "Fike Trucking Rr 1 Box 404 Corinth WV 26764"
  },
  {
    "Lookup": 10650,
    "Name": "J. Fint Construction",
    "Phone": 3046986543,
    "Address": "J. Fint Construction 23748 George Washington Hwy PO Box A Aurora WV 26705"
  },
  {
    "Lookup": 10750,
    "Name": "First United National Bank And",
    "Phone": 3013349471,
    "Address": "First United National Bank And 19 South Second Street Oakland MD 21550"
  },
  {
    "Lookup": 10850,
    "Name": "Fisher Auto Parts",
    "Phone": 3013342181,
    "Address": "Fisher Auto Parts Oakland MD 21550"
  },
  {
    "Lookup": 10900,
    "Name": "Tom Fitzwater",
    "Phone": "",
    "Address": "Tom Fitzwater 567 Kings Run Rd. Oakland MD 21550"
  },
  {
    "Lookup": 11000,
    "Name": "Frederick L. Fitzwater Busing",
    "Phone": 3013344375,
    "Address": "Frederick L. Fitzwater Busing 2636 Pysell Crosscut Rd Oakland MD 21550"
  },
  {
    "Lookup": 11100,
    "Name": "Fitzwater Furniture",
    "Phone": 3013342612,
    "Address": "Fitzwater Furniture 1947 Maryland Highway Oakland MD 21550"
  },
  {
    "Lookup": 11200,
    "Name": "Flanco",
    "Phone": 3044634623,
    "Address": "Flanco 137 Nelson Rd Thomas WV 26292"
  },
  {
    "Lookup": 11225,
    "Name": "Fleet Maintenance Service LLC",
    "Phone": 3015332140,
    "Address": "Fleet Maintenance Service LLC 300 Industrial Dr Oakland MD 21550"
  },
  {
    "Lookup": 11250,
    "Name": "Flying Scot Inc.",
    "Phone": 3013344848,
    "Address": "Flying Scot Inc. 157 Cemetery St. Deer Park MD 21550"
  },
  {
    "Lookup": 11300,
    "Name": "E R Foglepole Truck Co.",
    "Phone": 3013343930,
    "Address": "E R Foglepole Truck Co. P.O. Box 2039 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 11350,
    "Name": "Four Generations Logging",
    "Phone": 3044465548,
    "Address": "Four Generations Logging Rt 1 Box 98 Elk Garden WV 26717"
  },
  {
    "Lookup": 11400,
    "Name": "Four Seasons Real Estate",
    "Phone": 3013875320,
    "Address": "Four Seasons Real Estate P.O. Box 552 Oakland MD 21550"
  },
  {
    "Lookup": 11475,
    "Name": "Kope Enterprises",
    "Phone": 3013872770,
    "Address": "Kope Enterprises 182 Youghogheny Path Oakland MD 21550"
  },
  {
    "Lookup": 11550,
    "Name": "Dwayne Fratz Trucking",
    "Phone": 3015018760,
    "Address": "Dwayne Fratz Trucking 858 Accident Bittinger Rd. Accident MD 21520"
  },
  {
    "Lookup": 11610,
    "Name": "One Stop Towing And Transport Ll",
    "Phone": 3013342262,
    "Address": "One Stop Towing And Transport Ll 23 North 4th St. Oakland MD 21550"
  },
  {
    "Lookup": 11795,
    "Name": "Alex Friend",
    "Phone": 2403213108,
    "Address": "Alex Friend 110 E 2Nd Ave Loch Lynn MD 21550"
  },
  {
    "Lookup": 11800,
    "Name": "Mr. Curtis R. Friend",
    "Phone": 3013344487,
    "Address": "Mr. Curtis R. Friend 4246 Broadford Rd. Deer Park MD 21550"
  },
  {
    "Lookup": 11900,
    "Name": "Mr. David Friend",
    "Phone": 3013344512,
    "Address": "Mr. David Friend 494 Meadow Mt. Trail Swanton MD 21561"
  },
  {
    "Lookup": 12000,
    "Name": "Mr. Jerry B. Friend",
    "Phone": 3016161287,
    "Address": "Mr. Jerry B. Friend 4437 Maryland Hwy Oakland MD 21550"
  },
  {
    "Lookup": 12010,
    "Name": "Friendsville Ammoco",
    "Phone": 3017465690,
    "Address": "Friendsville Ammoco Main Street Friendsville MD 21531"
  },
  {
    "Lookup": 12015,
    "Name": "Matthew Fritz",
    "Phone": 3016899380,
    "Address": "Matthew Fritz 2978 Lower New Germany Road Frostburg MD 21532"
  },
  {
    "Lookup": 12020,
    "Name": "Frostburg Carquest",
    "Phone": 3016890166,
    "Address": "Frostburg Carquest P.O. Box 456 Frostburg MD 21532"
  },
  {
    "Lookup": 12025,
    "Name": "Richard Friend Farm",
    "Phone": 3013341649,
    "Address": "Richard Friend Farm 1716 Gorman Rd. Oakland MD 21550"
  },
  {
    "Lookup": 12040,
    "Name": "G & C Construction",
    "Phone": 3013342696,
    "Address": "G & C Construction 93 Ashby Cemetary Rd Oakland MD 21550"
  },
  {
    "Lookup": 12045,
    "Name": "G & G Auto",
    "Phone": 3046937813,
    "Address": "G & G Auto P.O. Box 163 Bayard WV 26707"
  },
  {
    "Lookup": 12050,
    "Name": "G & G Excavating",
    "Phone": 3047355836,
    "Address": "G & G Excavating P.O. Box 39 Aurora WV 26705"
  },
  {
    "Lookup": 12075,
    "Name": "Jerry Fritz",
    "Phone": 3018955984,
    "Address": "Jerry Fritz 10744 New Germany Road Grantsville MD 21536"
  },
  {
    "Lookup": 12082,
    "Name": "G & J Logging, Inc",
    "Phone": 3016895376,
    "Address": "G & J Logging, Inc 371 Lancaster Hill Rd Lonaconing MD 21539"
  },
  {
    "Lookup": 1283,
    "Name": "GMAS",
    "Phone": 3015015988,
    "Address": "GMAS 2552 Sand Flat Road Oakland MD 21550"
  },
  {
    "Lookup": 12085,
    "Name": "GMS Mine RePair & Maintence",
    "Phone": 3013348186,
    "Address": "GMS Mine RePair & Maintence P.O. Box 2446 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 12100,
    "Name": "G & S Coal Co.",
    "Phone": 3013593003,
    "Address": "G & S Coal Co. P.O. Box 185 Bloomington MD 21523"
  },
  {
    "Lookup": 12115,
    "Name": "G.W. Contracting",
    "Phone": 3016165762,
    "Address": "G.W. Contracting 5388 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 12170,
    "Name": "Cristopher Gank",
    "Phone": 3047892602,
    "Address": "Cristopher Gank Rt. 2 Terra Alta WV 26764"
  },
  {
    "Lookup": 12175,
    "Name": "Jeff Gank",
    "Phone": "",
    "Address": "Jeff Gank 938 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 12200,
    "Name": "Garrett Automotive Co.",
    "Phone": 3013876148,
    "Address": "Garrett Automotive Co. 18582 Garrett Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 12227,
    "Name": "G.C. Comm. Action Housing Dept",
    "Phone": 3013349431,
    "Address": "G.C. Comm. Action Housing Dept 104 E. Center Street Oakland MD 21550"
  },
  {
    "Lookup": 12230,
    "Name": "Garrett County Home Health",
    "Phone": 3013348113,
    "Address": "Garrett County Home Health"
  },
  {
    "Lookup": 12250,
    "Name": "Garrett Community College",
    "Phone": 3013876666,
    "Address": "Garrett Community College P.O.Box 151 Mchenry MD 21541"
  },
  {
    "Lookup": 12300,
    "Name": "Garrett County Board Of Educat",
    "Phone": 3013348924,
    "Address": "Garrett County Board Of Educat 40 S 2Nd St Oakland MD 21550"
  },
  {
    "Lookup": 12310,
    "Name": "Garrett Co Bd Of Ed Fns",
    "Phone": 3013348918,
    "Address": "Garrett Co Bd Of Ed Fns 770 Dennett Rd Oakland MD 21550"
  },
  {
    "Lookup": 12320,
    "Name": "Garrett Co Facilities & Man",
    "Phone": 3013341928,
    "Address": "Garrett Co Facilities & Man 203 S 4th St Rm 211 Oakland MD 21550"
  },
  {
    "Lookup": 12325,
    "Name": "Garrett County Health Dept.",
    "Phone": 3013348116,
    "Address": "Garrett County Health Dept. 2008 Maryland Highway Oakland MD 21550"
  },
  {
    "Lookup": 12350,
    "Name": "Garrett Co. Memorial Hospital",
    "Phone": 3015334000,
    "Address": "Garrett Co. Memorial Hospital 251 N. Fourth St. Oakland MD 21550"
  },
  {
    "Lookup": 12375,
    "Name": "Garrett County Office Of Solid",
    "Phone": 3013870322,
    "Address": "Garrett County Office Of Solid 3118 Oakland Sang Run Rd Oakland MD 21550"
  },
  {
    "Lookup": 12400,
    "Name": "Garrett County Roads",
    "Phone": 3013341510,
    "Address": "Garrett County Roads 2008 Maryland Hwy Public Service Center- Suite 3 Oakland MD 21550"
  },
  {
    "Lookup": 12500,
    "Name": "G.C. Sanitary District, Inc.",
    "Phone": 3013346976,
    "Address": "G.C. Sanitary District, Inc. 2008 Maryland Hwy, Suite 2 Shop 301-334-8382 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 12600,
    "Name": "Garrett County Sheriffs Deprar",
    "Phone": 3013341911,
    "Address": "Garrett County Sheriffs Deprar 311 E Alder Street Oakland MD 21550"
  },
  {
    "Lookup": 12660,
    "Name": "Garrett Electric",
    "Phone": 3013344577,
    "Address": "Garrett Electric 258 N. 3Rd. Street Oakland MD 21550"
  },
  {
    "Lookup": 12669,
    "Name": "Garrett Equipment Rentals LLC",
    "Phone": 3013349559,
    "Address": "Garrett Equipment Rentals LLC 14599 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 12690,
    "Name": "Garrett Medical Transport",
    "Phone": 3013347900,
    "Address": "Garrett Medical Transport P.O. Box 728 Oakland MD 21550"
  },
  {
    "Lookup": 12700,
    "Name": "Garrett Mine Supply",
    "Phone": 3013344136,
    "Address": "Garrett Mine Supply 104 CommeRCe Dr. Oakland MD 21550"
  },
  {
    "Lookup": 12750,
    "Name": "Garrett Transit Service",
    "Phone": 3013349431,
    "Address": "Garrett Transit Service 225 Francis Sanders Dr. W Oakland MD 21550"
  },
  {
    "Lookup": 12775,
    "Name": "Gary's Auto Sales",
    "Phone": 3013345705,
    "Address": "Gary's Auto Sales 4422 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 12780,
    "Name": "Gary's Garage",
    "Phone": 2403215664,
    "Address": "Gary's Garage 28453 Garrett Hwy Accident MD 21520"
  },
  {
    "Lookup": 12790,
    "Name": "Gene's RePair Shop",
    "Phone": 3047355226,
    "Address": "Gene's RePair Shop 179 Horse Shoe Run Road Eglon WV 26716"
  },
  {
    "Lookup": 12793,
    "Name": "The George's Creek Co, Inc",
    "Phone": 3016167955,
    "Address": "The George's Creek Co, Inc C/O Greg Shockey 178 Glotfelty Dr Oakland MD 21550"
  },
  {
    "Lookup": 12795,
    "Name": "Getz's Mart",
    "Phone": 3046937380,
    "Address": "Getz's Mart Hc 76 Box 730 Mount Storm WV 26739"
  },
  {
    "Lookup": 12800,
    "Name": "Gib's Mechanical",
    "Phone": "",
    "Address": "Gib's Mechanical 8190 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 12950,
    "Name": "Gingerich Concrete Constructio",
    "Phone": 8146237485,
    "Address": "Gingerich Concrete Constructio 5438 Bus Rt. 220 Bedford PA 15522"
  },
  {
    "Lookup": 13000,
    "Name": "Glade View Dairy Farm",
    "Phone": "",
    "Address": "Glade View Dairy Farm 795 Glade View Dairy Oakland MD 21550"
  },
  {
    "Lookup": 13060,
    "Name": "Glass Unlimited",
    "Phone": 3013343900,
    "Address": "Glass Unlimited P.O. Box 147 Oakland MD 21550"
  },
  {
    "Lookup": 13100,
    "Name": "Glotfelty Enterprises",
    "Phone": 3013343911,
    "Address": "Glotfelty Enterprises P.O. Box 438 Oakland MD 21550"
  },
  {
    "Lookup": 13125,
    "Name": "Johnathan James",
    "Phone": 3016165749,
    "Address": "Johnathan James 302 Shenandoah Ave Oakland MD 21550"
  },
  {
    "Lookup": 13150,
    "Name": "Glotfelty Lumber",
    "Phone": 3013344100,
    "Address": "Glotfelty Lumber 1063 Memorial Dr. Oakland MD 21550"
  },
  {
    "Lookup": 13200,
    "Name": "Mr. Mike Glotfelty",
    "Phone": 3013348524,
    "Address": "Mr. Mike Glotfelty 150 Turkey Neck Road Swanton MD 21561"
  },
  {
    "Lookup": 13250,
    "Name": "James Glotfelty",
    "Phone": 3013342997,
    "Address": "James Glotfelty Rt. 5 Oakland MD 21550"
  },
  {
    "Lookup": 13400,
    "Name": "Gnegy's Painting",
    "Phone": 3013341238,
    "Address": "Gnegy's Painting 1319 Stockslager Rd. Oakland MD 21550"
  },
  {
    "Lookup": 13530,
    "Name": "Mark Goff",
    "Phone": 3014542060,
    "Address": "Mark Goff Rt1 Box650 Rowlesburg WV 26425"
  },
  {
    "Lookup": 13540,
    "Name": "Golden Triangle Const Co Inc",
    "Phone": 7248282800,
    "Address": "Golden Triangle Const Co Inc 8555 Old Steubenville Pike Imperial PA 15126"
  },
  {
    "Lookup": 13550,
    "Name": "Jim Gordon",
    "Phone": 3018953227,
    "Address": "Jim Gordon 6226 National Pike Grantsville MD 21536"
  },
  {
    "Lookup": 13600,
    "Name": "Gorman V.F.D. Inc.",
    "Phone": 3013341600,
    "Address": "Gorman V.F.D. Inc. 270 Gorman Road Oakland MD 21550"
  },
  {
    "Lookup": 13605,
    "Name": "Gormania Garage",
    "Phone": 3016161696,
    "Address": "Gormania Garage 9192 George Washington Hwy Gormania WV 26720"
  },
  {
    "Lookup": 13630,
    "Name": "Grand Central Station",
    "Phone": 3013343006,
    "Address": "Grand Central Station 312 S. Third Street Oakland MD 21550"
  },
  {
    "Lookup": 13635,
    "Name": "Grant County Mulch Inc",
    "Phone": 3047497451,
    "Address": "Grant County Mulch Inc 181 Mulch Dr Petersburg WV 26847"
  },
  {
    "Lookup": 13640,
    "Name": "Grantsville Liquors",
    "Phone": 3018953133,
    "Address": "Grantsville Liquors P.O. Box 356 Grantsville MD 21536"
  },
  {
    "Lookup": 13645,
    "Name": "Grantsville Market",
    "Phone": 3018955574,
    "Address": "Grantsville Market P.O. Box 548 Grantsville MD 21536"
  },
  {
    "Lookup": 13650,
    "Name": "Grantsville Station",
    "Phone": 3018955585,
    "Address": "Grantsville Station 162 South Street Grantsville MD 21536"
  },
  {
    "Lookup": 13660,
    "Name": "Grantsville Truck & Trailer",
    "Phone": 3018955356,
    "Address": "Grantsville Truck & Trailer P.O. Box 693 Grantsville MD 21536"
  },
  {
    "Lookup": 13775,
    "Name": "Greenbrier Enterprise Inc",
    "Phone": 3048664911,
    "Address": "Greenbrier Enterprise Inc Rt. 1 Box 83 Davis WV 26260"
  },
  {
    "Lookup": 13780,
    "Name": "Green Things LLC.",
    "Phone": 3013346007,
    "Address": "Green Things LLC. P.O Box 224 Oakland MD 21550"
  },
  {
    "Lookup": 13800,
    "Name": "Greens Auto RePair",
    "Phone": 3013344588,
    "Address": "Greens Auto RePair 161 Monta Vista Road Oakland MD 21550"
  },
  {
    "Lookup": 13825,
    "Name": "Kelby Green",
    "Phone": 3016163297,
    "Address": "Kelby Green 161 Monta Vista Rd Oakland MD 21550"
  },
  {
    "Lookup": 13925,
    "Name": "Bill Green",
    "Phone": 3012454385,
    "Address": "Bill Green 3176 Dry Run Road Swanton MD 21561-9653"
  },
  {
    "Lookup": 13975,
    "Name": "Grimm Lumber Inc.",
    "Phone": 3047896231,
    "Address": "Grimm Lumber Inc. 78 Wood Rock Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 14000,
    "Name": "John's Auto RePair",
    "Phone": 3046985559,
    "Address": "John's Auto RePair 55 Front St Terra Alta WV 26764"
  },
  {
    "Lookup": 14100,
    "Name": "John Groves RePair And Body Shop",
    "Phone": 3013599716,
    "Address": "John Groves RePair And Body Shop 334 High Crest Drive Swanton MD 21561"
  },
  {
    "Lookup": 14150,
    "Name": "Quitin L Guthie Jr",
    "Phone": "",
    "Address": "Quitin L Guthie Jr 1714 Underwood Rd Oakland MD 21550"
  },
  {
    "Lookup": 14200,
    "Name": "Red Guthrie",
    "Phone": 3013349014,
    "Address": "Red Guthrie 159 Kendall Road Oakland MD 21550"
  },
  {
    "Lookup": 14250,
    "Name": "The Republican",
    "Phone": 3013343963,
    "Address": "The Republican P.O. Box 326 Oakland MD 21550"
  },
  {
    "Lookup": 14260,
    "Name": "H & A Trucking, LLC",
    "Phone": 3046148012,
    "Address": "H & A Trucking, LLC 1582 PieRCe Benbush Rd Thomas WV 26292"
  },
  {
    "Lookup": 14265,
    "Name": "H & H Trucking & Auto Body",
    "Phone": 3042881215,
    "Address": "H & H Trucking & Auto Body PO Box 78 Arthurdale WV 26520"
  },
  {
    "Lookup": 14275,
    "Name": "Hard Times Logging",
    "Phone": 3013343789,
    "Address": "Hard Times Logging 2247 Maryland Hwy. Mt Lake Park MD 21550"
  },
  {
    "Lookup": 14520,
    "Name": "Hamilton Farms",
    "Phone": 3013349319,
    "Address": "Hamilton Farms 24 Hamilton Way Oakland MD 21550"
  },
  {
    "Lookup": 14530,
    "Name": "Hanlin Performance",
    "Phone": 3015336920,
    "Address": "Hanlin Performance 309 Seneca Ave Oakland MD 21550"
  },
  {
    "Lookup": 14600,
    "Name": "Norman Hanline Excavating",
    "Phone": 3013343955,
    "Address": "Norman Hanline Excavating 1018 John Drive Oakland MD 21550"
  },
  {
    "Lookup": 14605,
    "Name": "Ray Hanline Excavating",
    "Phone": 3013343017,
    "Address": "Ray Hanline Excavating 358 Smith Drive Oakland MD 21550"
  },
  {
    "Lookup": 14650,
    "Name": "Hardesty Excavating",
    "Phone": 3047353046,
    "Address": "Hardesty Excavating 759 Stanley Hoover Rd. Terra Alta WV 26764"
  },
  {
    "Lookup": 14700,
    "Name": "Joe's Services",
    "Phone": 3046988789,
    "Address": "Joe's Services 5360 Stemple Ridge Rd. Aurora WV 26705"
  },
  {
    "Lookup": 14800,
    "Name": "BBt",
    "Phone": 3013342629,
    "Address": "BBt 2623 Bethlehem Road Oakland MD 21550"
  },
  {
    "Lookup": 14850,
    "Name": "Hardesty Logging",
    "Phone": 3013342327,
    "Address": "Hardesty Logging 330 Millstone Rd Crawford WV 26343"
  },
  {
    "Lookup": 14950,
    "Name": "Hartsell Logging Inc",
    "Phone": 3016168687,
    "Address": "Hartsell Logging Inc 2858 Maple Spring Hwy Eglon WV 26716"
  },
  {
    "Lookup": 14975,
    "Name": "Harris Pools",
    "Phone": 3013343358,
    "Address": "Harris Pools P.O. Box 3124 Oakland MD 21550"
  },
  {
    "Lookup": 14980,
    "Name": "Wade Harsh Farms",
    "Phone": 3047356495,
    "Address": "Wade Harsh Farms 740 Eglon Road Eglon WV 26716"
  },
  {
    "Lookup": 15000,
    "Name": "Lyvonne Harsh Farm",
    "Phone": 3047356455,
    "Address": "Lyvonne Harsh Farm 2119 Accident Rd Eglon WV 26716"
  },
  {
    "Lookup": 15100,
    "Name": "Harvey Trucking",
    "Phone": 3013344166,
    "Address": "Harvey Trucking 217 Mingo Ave Oakland MD 21550"
  },
  {
    "Lookup": 15125,
    "Name": "John Harvey",
    "Phone": 3013342808,
    "Address": "John Harvey 32 Audley Riley Rd. Oakland MD 21550"
  },
  {
    "Lookup": 15150,
    "Name": "PAul D. Harvey",
    "Phone": 3013345801,
    "Address": "PAul D. Harvey 291 Loch Deer Road Oakland MD 21550"
  },
  {
    "Lookup": 15375,
    "Name": "HaUser Trucking",
    "Phone": 3013343645,
    "Address": "HaUser Trucking 14782 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 15400,
    "Name": "Hawk Bros. Logging",
    "Phone": 3047498670,
    "Address": "Hawk Bros. Logging Hc 72 Scherr WV 26729"
  },
  {
    "Lookup": 15405,
    "Name": "Hawkeye Services",
    "Phone": 3047896286,
    "Address": "Hawkeye Services 915 West State Ave. Terra Alta WV 26764"
  },
  {
    "Lookup": 15425,
    "Name": "Heeter Construction LLC",
    "Phone": 3049273032,
    "Address": "Heeter Construction LLC 513 Charleston Rd Spencer WV 25276"
  },
  {
    "Lookup": 15450,
    "Name": "Mr. George HeBB",
    "Phone": 3013349492,
    "Address": "Mr. George HeBB 1979 Table Rock Road Oakland MD 21550"
  },
  {
    "Lookup": 15455,
    "Name": "Jeffery HeBB",
    "Phone": 2404427202,
    "Address": "Jeffery HeBB 29 Haines Rd Oakland MD 21550"
  },
  {
    "Lookup": 15470,
    "Name": "Stuart Thayer",
    "Phone": 3016166218,
    "Address": "Stuart Thayer 3849 Underwood Rd Oakland MD 21550"
  },
  {
    "Lookup": 15475,
    "Name": "Theresa Helbig-Miller",
    "Phone": 3012454320,
    "Address": "Theresa Helbig-Miller 149 Englewood Lane Grantsville MD 21536"
  },
  {
    "Lookup": 15500,
    "Name": "Helbig's Garage",
    "Phone": 3013340551,
    "Address": "Helbig's Garage 1229 Garrett Road Oakland MD 21550"
  },
  {
    "Lookup": 15600,
    "Name": "Helbig's Rt 560 Carpet Shoppe",
    "Phone": 3013349598,
    "Address": "Helbig's Rt 560 Carpet Shoppe 7773 Gorman Road Oakland MD 21550"
  },
  {
    "Lookup": 15650,
    "Name": "Helbig's RePair Shop",
    "Phone": 3013349012,
    "Address": "Helbig's RePair Shop 5677 Hutton Rd. Oakland MD 21550"
  },
  {
    "Lookup": 15660,
    "Name": "Heritage Stone",
    "Phone": 3044465218,
    "Address": "Heritage Stone 518 Feathers Rd Elk Garden WV 26717"
  },
  {
    "Lookup": 15670,
    "Name": "Heritage Coal And Natural Resour",
    "Phone": 8146347451,
    "Address": "Heritage Coal And Natural Resour 550 Beagle Rd Rockwood PA 15557"
  },
  {
    "Lookup": 15675,
    "Name": "Herrington Manor State Park",
    "Phone": 3013349180,
    "Address": "Herrington Manor State Park 222 Herrington Lane Oakland MD 21550"
  },
  {
    "Lookup": 15680,
    "Name": "Hershman Auto Sales",
    "Phone": 3013346100,
    "Address": "Hershman Auto Sales 257 Oakland Dr. Oakland MD 21550"
  },
  {
    "Lookup": 15700,
    "Name": "Hershman Construction LLC",
    "Phone": 3016169155,
    "Address": "Hershman Construction LLC 116 Timber Falls Drive Oakland MD 21550"
  },
  {
    "Lookup": 15725,
    "Name": "Hi-Way Paving",
    "Phone": 6148761700,
    "Address": "Hi-Way Paving 4343 Weaver Court North PO Box 550 Hilliard Oh 43026"
  },
  {
    "Lookup": 15730,
    "Name": "Hi-Way Transport LLC",
    "Phone": 6148761700,
    "Address": "Hi-Way Transport LLC 4343 Weaver Court North PO Box 550 Hilliard Oh 43026"
  },
  {
    "Lookup": 15740,
    "Name": "Hickory Stables",
    "Phone": 3016898120,
    "Address": "Hickory Stables 414 Chaney Rd Lonaconing MD 21539"
  },
  {
    "Lookup": 15750,
    "Name": "High Mt. On/Off Road",
    "Phone": 3013345060,
    "Address": "High Mt. On/Off Road 12534 Garrett Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 15800,
    "Name": "Hinebaugh's RePair",
    "Phone": 3013349306,
    "Address": "Hinebaugh's RePair 14 Charles Ln Deer Park MD 21550"
  },
  {
    "Lookup": 15900,
    "Name": "Holland Bros. Landscaping",
    "Phone": 3015330253,
    "Address": "Holland Bros. Landscaping 125 Evergreen Forest Dr. Oakland MD 21550"
  },
  {
    "Lookup": 15910,
    "Name": "Holland Electric",
    "Phone": 3013877967,
    "Address": "Holland Electric P.O Box 3030 Swanton MD 21561"
  },
  {
    "Lookup": 15925,
    "Name": "Holland Nursery",
    "Phone": 3013348360,
    "Address": "Holland Nursery 1354 Hutton Rd. Oakland MD 21550"
  },
  {
    "Lookup": 15930,
    "Name": "Holland Trucking LLC",
    "Phone": "",
    "Address": "Holland Trucking LLC 125Vevergreen Forest Drive Oakland MD 21550"
  },
  {
    "Lookup": 15935,
    "Name": "Hollada's Garage",
    "Phone": 8146622807,
    "Address": "Hollada's Garage P.O. Box 53 W. Salisbury PA 15562"
  },
  {
    "Lookup": 15950,
    "Name": "Hop's Shop",
    "Phone": 3013348631,
    "Address": "Hop's Shop 4407 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 15975,
    "Name": "Hopemont Auto",
    "Phone": 3047892352,
    "Address": "Hopemont Auto 32882 Veterans Memorial Hwy Terra Alta WV 26764"
  },
  {
    "Lookup": 15979,
    "Name": "Hopemont Hospital",
    "Phone": "",
    "Address": "Hopemont Hospital 150 Hopemont Dr Terra Alta WV 26764"
  },
  {
    "Lookup": 15987,
    "Name": "Henry Hostutler",
    "Phone": 3013346235,
    "Address": "Henry Hostutler 96 Sanders Lane Oakland MD 21550"
  },
  {
    "Lookup": 16000,
    "Name": "Humberson Equipment & Building",
    "Phone": 3043796211,
    "Address": "Humberson Equipment & Building Route 3 Box 174A Bruceton Mills WV 26525"
  },
  {
    "Lookup": 16200,
    "Name": "Hutton Auto",
    "Phone": 3013341712,
    "Address": "Hutton Auto 464 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 16225,
    "Name": "Hutzel Trucking",
    "Phone": 3013348682,
    "Address": "Hutzel Trucking 1231 Friendsville Addison Rd Friendsville MD 21531"
  },
  {
    "Lookup": 16400,
    "Name": "Industrial Service Contractors",
    "Phone": 8004241980,
    "Address": "Industrial Service Contractors P.O. Box 35051 Baltimore MD 21222"
  },
  {
    "Lookup": 16425,
    "Name": "Iron Horse Logging",
    "Phone": 3013346911,
    "Address": "Iron Horse Logging 81 Bethlehem Rd. Oakland MD 21550"
  },
  {
    "Lookup": 16450,
    "Name": "Irving's Upholstery & Fire Arm",
    "Phone": 3013348873,
    "Address": "Irving's Upholstery & Fire Arm 171 Wasgington Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 16525,
    "Name": "JDK Logging LLC",
    "Phone": 3013341527,
    "Address": "JDK Logging LLC P.O. Box 2175 Oakland MD 21550"
  },
  {
    "Lookup": 16535,
    "Name": "JSJ Trucking",
    "Phone": 3013349391,
    "Address": "JSJ Trucking PO Box 712 Oakland MD 21550"
  },
  {
    "Lookup": 16549,
    "Name": "J & A Auto RePair",
    "Phone": 3046983446,
    "Address": "J & A Auto RePair 891 Cathedral Way Aurora WV 26705"
  },
  {
    "Lookup": 16550,
    "Name": "J & B Logging Inc.",
    "Phone": 3016160362,
    "Address": "J & B Logging Inc. 712 Sunshine Drive Mt Lake Park MD 21550"
  },
  {
    "Lookup": 16650,
    "Name": "J & J Choice",
    "Phone": 8008343131,
    "Address": "J & J Choice P.O. Box 86 Terra Alta WV 26764"
  },
  {
    "Lookup": 16685,
    "Name": "J & L Body Shop",
    "Phone": 3016166000,
    "Address": "J & L Body Shop 1028 Ross Ave. Friendsville MD 21531"
  },
  {
    "Lookup": 16725,
    "Name": "Iii C's Construction",
    "Phone": 3013344509,
    "Address": "Iii C's Construction 367 Snow Dump Mt. Rd. Oakland MD 21550"
  },
  {
    "Lookup": 16750,
    "Name": "J & L RePair Shop",
    "Phone": 3013348309,
    "Address": "J & L RePair Shop 1565 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 16800,
    "Name": "J & R Texaco",
    "Phone": 3013876093,
    "Address": "J & R Texaco P.O. Box 435 Oakland Kitzmiller MD 21538"
  },
  {
    "Lookup": 16805,
    "Name": "J.B.E.A. Logging LLC",
    "Phone": 3016169474,
    "Address": "J.B.E.A. Logging LLC 574 Beitzel VAlley Dr Accident MD 21520"
  },
  {
    "Lookup": 16807,
    "Name": "JD Automotive",
    "Phone": 3049403246,
    "Address": "JD Automotive PO Box 781 Davis WV 26260"
  },
  {
    "Lookup": 16810,
    "Name": "J.D. Excavating LLC",
    "Phone": 3013879144,
    "Address": "J.D. Excavating LLC 392 Bray School Rd. Oakland MD 21550"
  },
  {
    "Lookup": 16815,
    "Name": "J.M. Contracting",
    "Phone": 3016164681,
    "Address": "J.M. Contracting 3783 Pleasant VAlley Rd. Oakland MD 21550"
  },
  {
    "Lookup": 16850,
    "Name": "Jim Jackson",
    "Phone": 3018955481,
    "Address": "Jim Jackson 11517 National Pike Grantsville MD 21536"
  },
  {
    "Lookup": 16900,
    "Name": "Bob James Excavating",
    "Phone": 3015010056,
    "Address": "Bob James Excavating 418 Mayberry Poling Rd. Swanton MD 21550"
  },
  {
    "Lookup": 17000,
    "Name": "Larry James Jr.",
    "Phone": 3013348523,
    "Address": "Larry James Jr. 302 Shenandoah Ave. Mt Lake Park MD 21550"
  },
  {
    "Lookup": 17110,
    "Name": "Jasco Fab. & Machine",
    "Phone": 3013346272,
    "Address": "Jasco Fab. & Machine 1404 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 17113,
    "Name": "Jeff's Auto Body",
    "Phone": 3046763042,
    "Address": "Jeff's Auto Body 190 Power Station Hwy Mount Storm WV 26739"
  },
  {
    "Lookup": 17115,
    "Name": "Jeff's RePair",
    "Phone": 3046987031,
    "Address": "Jeff's RePair 5726 Cransville Rd Oakland MD 21550"
  },
  {
    "Lookup": 17125,
    "Name": "Jim's RePair Service",
    "Phone": 3047895209,
    "Address": "Jim's RePair Service Rt. 2 Box 54E1 Terra Alta WV 26764"
  },
  {
    "Lookup": 17325,
    "Name": "Johns Body Shop",
    "Phone": 3013341534,
    "Address": "Johns Body Shop 2301 Hutton Rd Oakland MD 21550"
  },
  {
    "Lookup": 17400,
    "Name": "Jones Brothers Logging",
    "Phone": 3046937367,
    "Address": "Jones Brothers Logging Rt1. Box 151-J 370 Jones Hollow Elk Garden WV 26717"
  },
  {
    "Lookup": 17500,
    "Name": "Jones Trucking",
    "Phone": 3046937080,
    "Address": "Jones Trucking Rt. 1 Box 17 Elk Garden WV 26717"
  },
  {
    "Lookup": 17625,
    "Name": "Junk To Jewel",
    "Phone": 3015330552,
    "Address": "Junk To Jewel 23 Chadderton School Rd Oakland MD 21550"
  },
  {
    "Lookup": 17630,
    "Name": "Jukebox's Auto RePair",
    "Phone": 3016166975,
    "Address": "Jukebox's Auto RePair 8630 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 17650,
    "Name": "Mr. Jim Junkins",
    "Phone": 3046937130,
    "Address": "Mr. Jim Junkins P.O. Box 134 Mt Storm WV 26739"
  },
  {
    "Lookup": 17750,
    "Name": "Dept Juvenile Services Youth",
    "Phone": 3017221600,
    "Address": "Dept Juvenile Services Youth 1 James Day Cumberland MD 21502"
  },
  {
    "Lookup": 17760,
    "Name": "Greg Kamp Excavating",
    "Phone": 3018953552,
    "Address": "Greg Kamp Excavating 539 Chaney Rd. Lonaconing MD 21539"
  },
  {
    "Lookup": 17810,
    "Name": "Kamp Transport",
    "Phone": 3016974129,
    "Address": "Kamp Transport 47 Broadwater Cementary Rd Swanton MD 21561"
  },
  {
    "Lookup": 17820,
    "Name": "Keith Shaffers RePair",
    "Phone": 3013341853,
    "Address": "Keith Shaffers RePair 3015 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 17840,
    "Name": "Keplinger Services LLC",
    "Phone": 3048136282,
    "Address": "Keplinger Services LLC 186 Energy Way Gormania WV 26720"
  },
  {
    "Lookup": 17865,
    "Name": "J.H. Fletcher & Co.",
    "Phone": 3045257811,
    "Address": "J.H. Fletcher & Co. 402 High St. Huntington WV 25722"
  },
  {
    "Lookup": 17866,
    "Name": "K & W Cleaning",
    "Phone": 3013340677,
    "Address": "K & W Cleaning 212 PAul Friend Rd. Oakland MD 21550"
  },
  {
    "Lookup": 17867,
    "Name": "Jim Kenner RePair Shop",
    "Phone": 3013345229,
    "Address": "Jim Kenner RePair Shop P.O. Box 2105 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 17869,
    "Name": "Keyser Carquest Auto Parts",
    "Phone": 3047886666,
    "Address": "Keyser Carquest Auto Parts 375 West PiEDMont St Keyser WV 26726"
  },
  {
    "Lookup": 17875,
    "Name": "Keystone Lime Company",
    "Phone": 8146622711,
    "Address": "Keystone Lime Company P.O. Box 278 Springs PA 15562"
  },
  {
    "Lookup": 17900,
    "Name": "Keystone Paving Inc.",
    "Phone": 3017465087,
    "Address": "Keystone Paving Inc. 19746 Garrett Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 17920,
    "Name": "Tommy King",
    "Phone": "",
    "Address": "Tommy King 412 I Street Oakland MD 21550"
  },
  {
    "Lookup": 17925,
    "Name": "Kinsinger's Central Tractor",
    "Phone": 3013344129,
    "Address": "Kinsinger's Central Tractor 175 PAul Friend Road Oakland MD 21550"
  },
  {
    "Lookup": 17950,
    "Name": "PAul Kinsinger",
    "Phone": 3013348117,
    "Address": "PAul Kinsinger 3941 Pleasant VAlley Rd. Oakland MD 21550"
  },
  {
    "Lookup": 18000,
    "Name": "Darrell Kitzmiller",
    "Phone": 3013342880,
    "Address": "Darrell Kitzmiller P.O. Box 2224 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 18050,
    "Name": "Kessel Mulch Co. Inc.",
    "Phone": 3047883371,
    "Address": "Kessel Mulch Co. Inc. 66 Cut Off Rd Keyser WV 26726"
  },
  {
    "Lookup": 18160,
    "Name": "Terry King",
    "Phone": 3013341121,
    "Address": "Terry King 182 King-Reiss Lane Deer Park MD 21550"
  },
  {
    "Lookup": 18185,
    "Name": "Zane Kisner",
    "Phone": 3016166598,
    "Address": "Zane Kisner 231 Hunters Drive Oakland MD 21550"
  },
  {
    "Lookup": 18200,
    "Name": "Kitzmiller Fire Dept. Inc.",
    "Phone": 3014533392,
    "Address": "Kitzmiller Fire Dept. Inc. P.O Box 438 Kitzmiller MD 21538"
  },
  {
    "Lookup": 18275,
    "Name": "Rusty A. Kitzmiller",
    "Phone": 3016937443,
    "Address": "Rusty A. Kitzmiller Hc 76 Box 302 Mt Storm WV 26739"
  },
  {
    "Lookup": 18300,
    "Name": "Kitzmiller Garage",
    "Phone": 3046937723,
    "Address": "Kitzmiller Garage PO Box 47 Mount Storm WV 26739"
  },
  {
    "Lookup": 18375,
    "Name": "Dennis Knotts",
    "Phone": 3013343436,
    "Address": "Dennis Knotts 11 Locomotive Ave Gormania WV 26720"
  },
  {
    "Lookup": 18425,
    "Name": "Knotts Lumber",
    "Phone": "",
    "Address": "Knotts Lumber 4250 Kitzmiller Rd. Kitzmiller MD 21538"
  },
  {
    "Lookup": 18465,
    "Name": "Robert Kuhn",
    "Phone": 3046937035,
    "Address": "Robert Kuhn 8351 Union Hwy. Apt. 7 Mt Storm WV 26739"
  },
  {
    "Lookup": 18468,
    "Name": "Tom Kuhn-Funland",
    "Phone": "",
    "Address": "Tom Kuhn-Funland 409 Fairway Drive Oakland MD 21550"
  },
  {
    "Lookup": 18480,
    "Name": "Lakefront Enterprises",
    "Phone": 3013870115,
    "Address": "Lakefront Enterprises 23 Mellinger Road Swanton MD 21561"
  },
  {
    "Lookup": 18595,
    "Name": "Lakeview Auto Parts",
    "Phone": 3013877228,
    "Address": "Lakeview Auto Parts P.O. Box 359 Mchenry MD 21541"
  },
  {
    "Lookup": 18600,
    "Name": "Lakeview Automotive",
    "Phone": 3016166701,
    "Address": "Lakeview Automotive 4757 Sang Run Rd. Mchenry MD 21541"
  },
  {
    "Lookup": 18650,
    "Name": "Mr. Gene E. Lambert",
    "Phone": 3013342562,
    "Address": "Mr. Gene E. Lambert 6 Callicoat Road Oakland MD 21550"
  },
  {
    "Lookup": 18675,
    "Name": "Gary Lambka RePair",
    "Phone": 3046937860,
    "Address": "Gary Lambka RePair P.O. Box 106 Mt Storm WV 26739"
  },
  {
    "Lookup": 18677,
    "Name": "Jennifer Lambka",
    "Phone": 3047895108,
    "Address": "Jennifer Lambka Rr 1 Box 424 Corinth WV 26764"
  },
  {
    "Lookup": 18685,
    "Name": "Land Design LLC",
    "Phone": 3013348431,
    "Address": "Land Design LLC 198 Apple Blossom Lane Oakland MD 21550"
  },
  {
    "Lookup": 18686,
    "Name": "Charles Langford",
    "Phone": "",
    "Address": "Charles Langford PO Box 294 Rowlesburg WV 26425"
  },
  {
    "Lookup": 18690,
    "Name": "Lantz Dairy",
    "Phone": 3047356835,
    "Address": "Lantz Dairy 705 Shillingburg Rd. Aurora WV 26705"
  },
  {
    "Lookup": 18695,
    "Name": "Greg Lawson",
    "Phone": 3016162505,
    "Address": "Greg Lawson 105 Louvina Dr Lonaconing MD 21539"
  },
  {
    "Lookup": 18700,
    "Name": "Laoc Corporation",
    "Phone": 3013344607,
    "Address": "Laoc Corporation 3388 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 18950,
    "Name": "Mike Lawson",
    "Phone": "",
    "Address": "Mike Lawson 2439 Old Morgantown Rd. W Friendsville MD 21531"
  },
  {
    "Lookup": 19000,
    "Name": "Layman's Body Shop",
    "Phone": 3047353425,
    "Address": "Layman's Body Shop 1314 Cathedral Way Aurora WV 26705"
  },
  {
    "Lookup": 19015,
    "Name": "Gary Layman",
    "Phone": "",
    "Address": "Gary Layman 246 Old New Germany Rd Grantsville MD 21536"
  },
  {
    "Lookup": 19200,
    "Name": "Lee's Body Shop",
    "Phone": 3014533467,
    "Address": "Lee's Body Shop 671 Pee Wee Rd. Kitzmiller MD 21538"
  },
  {
    "Lookup": 19385,
    "Name": "Jeff Lewis",
    "Phone": "",
    "Address": "Jeff Lewis 2011 Garrett Road Oakland MD 21550"
  },
  {
    "Lookup": 19390,
    "Name": "Lewis & Burge, Inc.",
    "Phone": 3047892611,
    "Address": "Lewis & Burge, Inc. PO Box 106 Terra Alta WV 26764"
  },
  {
    "Lookup": 19400,
    "Name": "Lewis & Sons",
    "Phone": 3013341485,
    "Address": "Lewis & Sons 399 Kings Run Rd. Oakland MD 21550"
  },
  {
    "Lookup": 19450,
    "Name": "Lewis Used Cars",
    "Phone": 3013342992,
    "Address": "Lewis Used Cars 940 Pysell Crosscut Rd Oakland MD 21550"
  },
  {
    "Lookup": 19451,
    "Name": "Lewis Farm",
    "Phone": "",
    "Address": "Lewis Farm 7582 Saltlick Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 19500,
    "Name": "Bill Lewis",
    "Phone": "",
    "Address": "Bill Lewis 202 Sander Lane Oakland MD 21550"
  },
  {
    "Lookup": 19515,
    "Name": "Gary L. Lewis",
    "Phone": 3013348691,
    "Address": "Gary L. Lewis P.O. Box 472 Oakland MD 21550"
  },
  {
    "Lookup": 19520,
    "Name": "Jamie L. Lewis",
    "Phone": 3013346918,
    "Address": "Jamie L. Lewis 318 Allegany Drive Oakland MD 21550"
  },
  {
    "Lookup": 19525,
    "Name": "Mr. Ronald Lewis",
    "Phone": 3016162625,
    "Address": "Mr. Ronald Lewis 1515 Steyer Mine Road Oakland MD 21550"
  },
  {
    "Lookup": 19540,
    "Name": "Link Resources Inc.",
    "Phone": 3046937885,
    "Address": "Link Resources Inc. C/O North Branch Operatio Bayard WV 26707"
  },
  {
    "Lookup": 19541,
    "Name": "Linsco",
    "Phone": 3013877181,
    "Address": "Linsco 19139 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 19542,
    "Name": "Liberty Motorsports",
    "Phone": 3048138028,
    "Address": "Liberty Motorsports 350 Hiiltop Ave Keyser WV 26726"
  },
  {
    "Lookup": 19545,
    "Name": "Lipscomb's Lawn Products",
    "Phone": 3047353017,
    "Address": "Lipscomb's Lawn Products 306 Steiner Country Lane Eglon WV 26716"
  },
  {
    "Lookup": 19547,
    "Name": "Little Joe's Contracting",
    "Phone": 3013349536,
    "Address": "Little Joe's Contracting 778 Old Crellin Rd. Oakland MD 21550"
  },
  {
    "Lookup": 19550,
    "Name": "Little Mountain Enterprises",
    "Phone": 3013342552,
    "Address": "Little Mountain Enterprises 340 Lady Slipper Lane Oakland MD 21550"
  },
  {
    "Lookup": 19600,
    "Name": "Loch Lynn Service Center",
    "Phone": 3013341706,
    "Address": "Loch Lynn Service Center 5 West 3Rd Ave. Loch Lynn MD 21550"
  },
  {
    "Lookup": 19625,
    "Name": "Robert Lockmiller",
    "Phone": 3013341726,
    "Address": "Robert Lockmiller 5626 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 19700,
    "Name": "Lohr Distributors",
    "Phone": 3013343409,
    "Address": "Lohr Distributors 320 South Eighth Street Oakland MD 21550"
  },
  {
    "Lookup": 19750,
    "Name": "Ed Lottig Garage",
    "Phone": 8146624238,
    "Address": "Ed Lottig Garage 733 Saint PAul Rd. Meyersdale PA 15552"
  },
  {
    "Lookup": 19755,
    "Name": "Eddie's Auto Moblie Detail",
    "Phone": 3013382372,
    "Address": "Eddie's Auto Moblie Detail 15517 Shamrock Rd Cumberland MD 21502"
  },
  {
    "Lookup": 19758,
    "Name": "Edwards Construction",
    "Phone": 3016166465,
    "Address": "Edwards Construction 2023 Fingerboard Rd Oakland MD 21550"
  },
  {
    "Lookup": 19760,
    "Name": "EDM Trucking",
    "Phone": 2403211970,
    "Address": "EDM Trucking 1321 White ChuRCh Road Oakland MD 21550"
  },
  {
    "Lookup": 19775,
    "Name": "Long Branch U Haul",
    "Phone": 3013344533,
    "Address": "Long Branch U Haul 1501 Maryland Hwy Oakland MD 21550"
  },
  {
    "Lookup": 19800,
    "Name": "Les Taylor Small Engine RePair",
    "Phone": 3046937039,
    "Address": "Les Taylor Small Engine RePair Hc 76 Box 703 Mt Storm WV 26739"
  },
  {
    "Lookup": 20025,
    "Name": "Lucas Landscaping",
    "Phone": 3013343069,
    "Address": "Lucas Landscaping 846 Jasper Riley Rd. Oakland MD 21550"
  },
  {
    "Lookup": 20045,
    "Name": "Maid To Sparkle",
    "Phone": 2403215483,
    "Address": "Maid To Sparkle 915 State St Kitzmiller MD 21538"
  },
  {
    "Lookup": 20050,
    "Name": "Maryland Forest Service",
    "Phone": 3017772137,
    "Address": "Maryland Forest Service 3 Pershing St. Cumberland MD 21502"
  },
  {
    "Lookup": 20100,
    "Name": "Rob's Auto & Body Shop",
    "Phone": 2403211871,
    "Address": "Rob's Auto & Body Shop 388 West Liberty St. Oakland MD 21550"
  },
  {
    "Lookup": 20125,
    "Name": "Maryland DNR",
    "Phone": 3013874111,
    "Address": "Maryland DNR Deep Creek Lake R.A. Swanton MD 21561"
  },
  {
    "Lookup": 20150,
    "Name": "Maryland Environmental Service",
    "Phone": "",
    "Address": "Maryland Environmental Service 259 Najoles Rd Millersville MD 21108"
  },
  {
    "Lookup": 20175,
    "Name": "Maryland Minerals Inc.",
    "Phone": 3013872300,
    "Address": "Maryland Minerals Inc. 19746 Garrett Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 20200,
    "Name": "BKN RePair",
    "Phone": 3016163167,
    "Address": "BKN RePair 6128 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 20225,
    "Name": "Luke's Auto Clinic",
    "Phone": 3047896906,
    "Address": "Luke's Auto Clinic 203 West Highland Ave. Terra Alta WV 26764"
  },
  {
    "Lookup": 20230,
    "Name": "Mct Inc",
    "Phone": 3048137413,
    "Address": "Mct Inc Rt 5 Box 190 Keyser WV 26726"
  },
  {
    "Lookup": 20233,
    "Name": "M & J RePair Service LLC.",
    "Phone": 3044465448,
    "Address": "M & J RePair Service LLC. 1348 Bosley Rd Keyser WV 26726"
  },
  {
    "Lookup": 20235,
    "Name": "M & N Automotive",
    "Phone": 3013340737,
    "Address": "M & N Automotive P.O. Box 3127 Deer Park MD 21550"
  },
  {
    "Lookup": 20240,
    "Name": "M & S Stone Quarry",
    "Phone": 3018955151,
    "Address": "M & S Stone Quarry P.O. Box 357 Grantsville MD 21536"
  },
  {
    "Lookup": 20275,
    "Name": "Madigan's Auto Sales",
    "Phone": 3013344817,
    "Address": "Madigan's Auto Sales P.O. Box 3148 Deer Park MD 21550"
  },
  {
    "Lookup": 20300,
    "Name": "Manor Builders Supply Inc.",
    "Phone": 3013342109,
    "Address": "Manor Builders Supply Inc. 1375 Maryland Hwy Mt Lake Park MD 21550"
  },
  {
    "Lookup": 20325,
    "Name": "Maple Hurst Farm",
    "Phone": 3047355879,
    "Address": "Maple Hurst Farm 524 Gnegy ChuRCh Rd. Eglon WV 26716"
  },
  {
    "Lookup": 20350,
    "Name": "Maple Lane Nursery",
    "Phone": 3014533385,
    "Address": "Maple Lane Nursery 373 Short Run Road Kitzmiller MD 21538"
  },
  {
    "Lookup": 20375,
    "Name": "Marple Mulching LLC",
    "Phone": 3013342941,
    "Address": "Marple Mulching LLC 519 Lemoye King Rd Oakland MD 21550"
  },
  {
    "Lookup": 20400,
    "Name": "Margroff Brothers",
    "Phone": 3018268514,
    "Address": "Margroff Brothers Route 2 Box 13 Accident MD 21520"
  },
  {
    "Lookup": 20500,
    "Name": "Mark's Body Shop",
    "Phone": 2403210947,
    "Address": "Mark's Body Shop 17255 Maryland Highway Swanton MD 21561"
  },
  {
    "Lookup": 20525,
    "Name": "Marked Solutions",
    "Phone": 3047356382,
    "Address": "Marked Solutions 1448 Cathedral Way Aurora WV 26705"
  },
  {
    "Lookup": 20550,
    "Name": "Markwood Preowned",
    "Phone": 3017298090,
    "Address": "Markwood Preowned 17201 Mcmullen Hwy Cumberland MD 21502"
  },
  {
    "Lookup": 20700,
    "Name": "Martin Auto Body",
    "Phone": 3013342903,
    "Address": "Martin Auto Body 2247 Hutton Rd. Oakland MD 21550"
  },
  {
    "Lookup": 20780,
    "Name": "M & W Transmission",
    "Phone": "",
    "Address": "M & W Transmission P.O. Box 2391 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 20790,
    "Name": "Harry L. Martin Bus Account",
    "Phone": 3013349095,
    "Address": "Harry L. Martin Bus Account 9605 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 20800,
    "Name": "Martin's Garage",
    "Phone": 3046937751,
    "Address": "Martin's Garage P.O.Box 256 Bayard WV 26707"
  },
  {
    "Lookup": 20875,
    "Name": "Martin's Used Parts",
    "Phone": 3013343284,
    "Address": "Martin's Used Parts 4906 Garrett Highwat Oakland MD 21550"
  },
  {
    "Lookup": 20900,
    "Name": "Myron Martin",
    "Phone": 3013341813,
    "Address": "Myron Martin Route 2 Box 2K Oakland MD 21550"
  },
  {
    "Lookup": 20975,
    "Name": "Maryland DNR-Wildlife&Heritage",
    "Phone": 3013344255,
    "Address": "Maryland DNR-Wildlife&Heritage 1728 Kings Run Road Oakland MD 21550"
  },
  {
    "Lookup": 21000,
    "Name": "Maryland State Highway Adminis",
    "Phone": 3013342133,
    "Address": "Maryland State Highway Adminis 3876 National Pike Accident MD 21520-9785"
  },
  {
    "Lookup": 21025,
    "Name": "Maryland State Police",
    "Phone": 3013871101,
    "Address": "Maryland State Police 67 Friendsville Rd Mchenry MD 21541"
  },
  {
    "Lookup": 21040,
    "Name": "Masters Farm",
    "Phone": 3044549555,
    "Address": "Masters Farm Rt. 1 Box 792 Rowlesburg WV 26425"
  },
  {
    "Lookup": 21045,
    "Name": "Mcclung Farms",
    "Phone": 3019161413,
    "Address": "Mcclung Farms 10117 Johns Drive Damascus MD 20872"
  },
  {
    "Lookup": 21047,
    "Name": "Tom Mcconnell Farm",
    "Phone": 3046987007,
    "Address": "Tom Mcconnell Farm 183 Hauger Knob Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 21050,
    "Name": "Mcfarland RePair & Welding",
    "Phone": 3046989622,
    "Address": "Mcfarland RePair & Welding 105 Sanders St. Terra Alta WV 26764"
  },
  {
    "Lookup": 21100,
    "Name": "Dayton Mckenzie",
    "Phone": 3016162962,
    "Address": "Dayton Mckenzie 300 White Oak Lane Oakland MD 21550"
  },
  {
    "Lookup": 21101,
    "Name": "Dayton Mckenzie",
    "Phone": 3016162962,
    "Address": "Dayton Mckenzie 300 White Oak Lane Oakland MD 21550"
  },
  {
    "Lookup": 21160,
    "Name": "Mr. Clayton P. Miller",
    "Phone": 3013342916,
    "Address": "Mr. Clayton P. Miller 1230 Mansfield Road Oakland MD 21550"
  },
  {
    "Lookup": 21190,
    "Name": "Meadow Ridge Contracting Inc.",
    "Phone": 3046783653,
    "Address": "Meadow Ridge Contracting Inc. P.O. Box 50 Terra Alta WV 26764"
  },
  {
    "Lookup": 21200,
    "Name": "Mellinger RePair",
    "Phone": 3013874600,
    "Address": "Mellinger RePair 210 Four M Rd. Swanton MD 21561"
  },
  {
    "Lookup": 21250,
    "Name": "Mr. Randy Mellinger",
    "Phone": 3013345180,
    "Address": "Mr. Randy Mellinger 1207 Fingerboard Rd. Oakland MD 21550"
  },
  {
    "Lookup": 21300,
    "Name": "Homer Mellott",
    "Phone": 3013876815,
    "Address": "Homer Mellott 1375 Mellott Rd Oakland MD 21550"
  },
  {
    "Lookup": 21360,
    "Name": "Melrob Trucking Inc.",
    "Phone": 3047355722,
    "Address": "Melrob Trucking Inc. 169 Floyd Bolyard Drive Aurora WV 26705-8623"
  },
  {
    "Lookup": 21375,
    "Name": "Menges Trucking",
    "Phone": 3018953444,
    "Address": "Menges Trucking 4239 National Pike Grantsville MD 21536"
  },
  {
    "Lookup": 21390,
    "Name": "Mettiki Coal",
    "Phone": "",
    "Address": "Mettiki Coal 293 Table Rock Rd. Oakland MD 21550"
  },
  {
    "Lookup": 21400,
    "Name": "Mettiki Coal LLC",
    "Phone": 8596856320,
    "Address": "Mettiki Coal LLC PO Box 910850 Lexington Ky 40591"
  },
  {
    "Lookup": 21401,
    "Name": "Mettiki Coal LLC F Mine",
    "Phone": 8596856320,
    "Address": "Mettiki Coal LLC F Mine PO Box 910850 Lexington Ky 40591"
  },
  {
    "Lookup": 21405,
    "Name": "Mettiki Coal Filter",
    "Phone": 3013343952,
    "Address": "Mettiki Coal Filter 293 Tablerock Road Oakland MD 21550"
  },
  {
    "Lookup": 21410,
    "Name": "Mettiki Coal (Preston)",
    "Phone": 8592247221,
    "Address": "Mettiki Coal (Preston) Attn: Joy UpchuRCh 771 Corporate Drive Ste 1000 Lexington Ky 40503"
  },
  {
    "Lookup": 21500,
    "Name": "Mike's Auto & Body",
    "Phone": 3016163511,
    "Address": "Mike's Auto & Body 197 Hardesty Rd Kitzmiller MD 21538"
  },
  {
    "Lookup": 21525,
    "Name": "Micks Maintenance",
    "Phone": 3013872587,
    "Address": "Micks Maintenance PO Box 112 Swanton MD 21561"
  },
  {
    "Lookup": 21550,
    "Name": "R.J. Stone",
    "Phone": 3013349695,
    "Address": "R.J. Stone 2684 Garrett Rd Oakland MD 21550"
  },
  {
    "Lookup": 21600,
    "Name": "My-O-Tire",
    "Phone": 3013342146,
    "Address": "My-O-Tire 133 Weber Road Oakland MD 21550"
  },
  {
    "Lookup": 21650,
    "Name": "Mighty Distributors",
    "Phone": 3013344816,
    "Address": "Mighty Distributors 515 D Street Mt Lake Park MD 21550"
  },
  {
    "Lookup": 21700,
    "Name": "Mike's Body Shop",
    "Phone": 3016169211,
    "Address": "Mike's Body Shop 532 Dry Run Rd Swanton MD 21561"
  },
  {
    "Lookup": 21800,
    "Name": "Mike's RePair",
    "Phone": 3013346086,
    "Address": "Mike's RePair 4374 Maryland Hwy Oakland MD 21550"
  },
  {
    "Lookup": 21850,
    "Name": "Mill Bound Trucking LLC",
    "Phone": 3047892803,
    "Address": "Mill Bound Trucking LLC 64 Russ Deberry Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 21900,
    "Name": "Ralph P. Miller",
    "Phone": 3013344303,
    "Address": "Ralph P. Miller 1734 Mason School Rd. Oakland MD 21550"
  },
  {
    "Lookup": 21915,
    "Name": "Ray Miller",
    "Phone": 3016891260,
    "Address": "Ray Miller 7973 Avilton-Lonaconing Road Lonaconing MD 21539"
  },
  {
    "Lookup": 21920,
    "Name": "David\"The Jake\" Miller",
    "Phone": 2403213836,
    "Address": "David\"The Jake\" Miller 5480 Hutton Rd Oakland MD 21550"
  },
  {
    "Lookup": 21950,
    "Name": "Marvin Miller",
    "Phone": 3012454006,
    "Address": "Marvin Miller 359 Smith Road Grantsville MD 21536"
  },
  {
    "Lookup": 21965,
    "Name": "Miller's Welding Inc.",
    "Phone": 3016898108,
    "Address": "Miller's Welding Inc. 7945 Avilton-Lonaconing Rd. Lonaconing MD 21539"
  },
  {
    "Lookup": 21966,
    "Name": "Mills Enterprises LLC",
    "Phone": "",
    "Address": "Mills Enterprises LLC 1803 Potomac Camp Rd Oakland MD 21550"
  },
  {
    "Lookup": 21968,
    "Name": "Mitch Body Shop",
    "Phone": 3047881305,
    "Address": "Mitch Body Shop Rt. 1 Box 131 Keyser WV 26726"
  },
  {
    "Lookup": 21970,
    "Name": "Milro Services, Inc.",
    "Phone": 3013342128,
    "Address": "Milro Services, Inc. P.O. Box 2367 Oakland MD 21550"
  },
  {
    "Lookup": 21974,
    "Name": "Micheal Moon",
    "Phone": 3013590135,
    "Address": "Micheal Moon 1779 Savage River Road Swanton MD 21561"
  },
  {
    "Lookup": 21975,
    "Name": "Moonie's Auto RePair",
    "Phone": 3013349113,
    "Address": "Moonie's Auto RePair 2753 Steyer Mine Road Oakland MD 21550"
  },
  {
    "Lookup": 21976,
    "Name": "Montcroft Farms",
    "Phone": 3047892519,
    "Address": "Montcroft Farms 797 Potato Farm Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 5471,
    "Name": "Moore Racing",
    "Phone": 2403212165,
    "Address": "Moore Racing 778 Old Crellin Rd Oakland MD 21550"
  },
  {
    "Lookup": 21978,
    "Name": "Moreland Trucking LLC",
    "Phone": 3013345978,
    "Address": "Moreland Trucking LLC 5992 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 21979,
    "Name": "John Moreland",
    "Phone": 3046937139,
    "Address": "John Moreland PO Box 87 Mount Storm WV 26739"
  },
  {
    "Lookup": 21980,
    "Name": "Morgan Services",
    "Phone": 3013341303,
    "Address": "Morgan Services 397 Morgan's Lane Oakland MD 21550"
  },
  {
    "Lookup": 21982,
    "Name": "Morsaw Logging",
    "Phone": 3015334401,
    "Address": "Morsaw Logging 6128 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 21984,
    "Name": "Mountaineer Contractors",
    "Phone": "",
    "Address": "Mountaineer Contractors PO Box 606 Kingwood WV 26537"
  },
  {
    "Lookup": 21985,
    "Name": "Mountain Enterprises Inc",
    "Phone": 3013340695,
    "Address": "Mountain Enterprises Inc PO Box 315 Mc Henry MD 21541"
  },
  {
    "Lookup": 21987,
    "Name": "Mountain Man Contracting",
    "Phone": 3048132650,
    "Address": "Mountain Man Contracting 16642 George Washington Hwy Mount Storm WV 26739"
  },
  {
    "Lookup": 21990,
    "Name": "Mountain View Farm",
    "Phone": 2403212021,
    "Address": "Mountain View Farm 1375 Blue RiBBon Rd Oakland MD 21550"
  },
  {
    "Lookup": 22000,
    "Name": "Mt. Counties Construction Co.",
    "Phone": 3013876563,
    "Address": "Mt. Counties Construction Co. 951 Foster Rd. Oakland MD 21550"
  },
  {
    "Lookup": 22200,
    "Name": "Mt. Grove V. F. D.",
    "Phone": 3047356500,
    "Address": "Mt. Grove V. F. D. 385 Maple Spring Hwy. Eglon WV 26716"
  },
  {
    "Lookup": 22250,
    "Name": "Mt. Lake Independent Baptist C",
    "Phone": 3013343234,
    "Address": "Mt. Lake Independent Baptist C 1005 Broadford Rd Oakland MD 21550"
  },
  {
    "Lookup": 22300,
    "Name": "Mt. Top Public Service Distric",
    "Phone": 3046937667,
    "Address": "Mt. Top Public Service Distric P.O. Box 236 Mt Storm WV 26739"
  },
  {
    "Lookup": 22500,
    "Name": "Mt. State Wire & Fence Co.",
    "Phone": 3013348518,
    "Address": "Mt. State Wire & Fence Co. 22266 George Washington Hwy Aurora WV 26705"
  },
  {
    "Lookup": 22550,
    "Name": "Mt. Storm V.F.D. Inc.",
    "Phone": 3046937157,
    "Address": "Mt. Storm V.F.D. Inc. P.O. Box 14 Mt Storm WV 26739"
  },
  {
    "Lookup": 22650,
    "Name": "Mt. Top Farms",
    "Phone": 3047356951,
    "Address": "Mt. Top Farms Rt. 1 Box 205 Aurora WV 26705"
  },
  {
    "Lookup": 22675,
    "Name": "Mt. Top Garage",
    "Phone": 3046937075,
    "Address": "Mt. Top Garage Rt 1 Box 227 B Elk Garden WV 26717"
  },
  {
    "Lookup": 22677,
    "Name": "Mt. Top Glass",
    "Phone": 3013343050,
    "Address": "Mt. Top Glass P.O. Box 442 Oakland MD 21550"
  },
  {
    "Lookup": 22680,
    "Name": "Mt. Top Mowers",
    "Phone": 3013340728,
    "Address": "Mt. Top Mowers 411 M Street Oakland MD 21550"
  },
  {
    "Lookup": 22700,
    "Name": "Mt. Top Paving",
    "Phone": 3013876604,
    "Address": "Mt. Top Paving 16617 Garrett Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 22710,
    "Name": "Mt. Top Seal Coating",
    "Phone": 3013342831,
    "Address": "Mt. Top Seal Coating 53 Bird Avenue Oakland MD 21550"
  },
  {
    "Lookup": 22715,
    "Name": "Mt. Top Tree Farm",
    "Phone": 3013344896,
    "Address": "Mt. Top Tree Farm 398 Harley Lane Oakland MD 21550"
  },
  {
    "Lookup": 22720,
    "Name": "Mt VAlley Farm",
    "Phone": 3047353612,
    "Address": "Mt VAlley Farm 505 Shumaker-Cole Rd Eglon WV 26716"
  },
  {
    "Lookup": 22725,
    "Name": "Mt. View Farms",
    "Phone": 2403212021,
    "Address": "Mt. View Farms 1375 Blue RiBBon Rd. Oakland MD 21550"
  },
  {
    "Lookup": 22750,
    "Name": "Mt. Villa Associates",
    "Phone": 3013343568,
    "Address": "Mt. Villa Associates P.O. Box 522 Oakland MD 21550"
  },
  {
    "Lookup": 22800,
    "Name": "Mr. Jeff Muenchow",
    "Phone": 3013879305,
    "Address": "Mr. Jeff Muenchow 17848 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 22900,
    "Name": "Ball Pre-Owned Auto",
    "Phone": 3047892147,
    "Address": "Ball Pre-Owned Auto PO Box 1 Terra Alta WV 26764"
  },
  {
    "Lookup": 22920,
    "Name": "Murphy's Garage",
    "Phone": 3016164628,
    "Address": "Murphy's Garage PO Box 90 Gormania WV 26720"
  },
  {
    "Lookup": 22935,
    "Name": "Mustang Express",
    "Phone": 3013341188,
    "Address": "Mustang Express 18140 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 22950,
    "Name": "Herbert Myers Inc.",
    "Phone": 3014533383,
    "Address": "Herbert Myers Inc. Box 1261 Kitzmiller MD 21538"
  },
  {
    "Lookup": 22955,
    "Name": "Myers & Son Trucking",
    "Phone": 3047353410,
    "Address": "Myers & Son Trucking 6039 Stemple Ridge Rd Aurora WV 26705-8139"
  },
  {
    "Lookup": 22981,
    "Name": "National Salvage & Service",
    "Phone": 8123399000,
    "Address": "National Salvage & Service PO Box 300 Clear Creek In 47426"
  },
  {
    "Lookup": 22990,
    "Name": "Nature's Own Landscaping",
    "Phone": 3013879370,
    "Address": "Nature's Own Landscaping 6936 Sang Run Rd. Mchenry MD 21541"
  },
  {
    "Lookup": 23000,
    "Name": "Nayburlee RePair",
    "Phone": 3012454384,
    "Address": "Nayburlee RePair 11411 Bittinger Road Bittinger MD 21522"
  },
  {
    "Lookup": 23050,
    "Name": "A.D. Naylor's Contracting",
    "Phone": 3013343934,
    "Address": "A.D. Naylor's Contracting 32 S. Third St. Oakland MD 21550"
  },
  {
    "Lookup": 23055,
    "Name": "Nazelrod Excavating",
    "Phone": 3047896835,
    "Address": "Nazelrod Excavating 358 Sanders St. Terra Alta WV 26764"
  },
  {
    "Lookup": 23060,
    "Name": "Potomac Garrett State Forest",
    "Phone": 3013345797,
    "Address": "Potomac Garrett State Forest 1431 Potomac Camp Road Oakland MD 21550"
  },
  {
    "Lookup": 23070,
    "Name": "Mikey Nichols",
    "Phone": 2406752429,
    "Address": "Mikey Nichols 9169 George Washington Hwy PO Box 7 Gormania WV 26720"
  },
  {
    "Lookup": 23075,
    "Name": "Don Nine Auto",
    "Phone": 3016970777,
    "Address": "Don Nine Auto 13229 Garrett Hwy #2 Oakland MD 21550"
  },
  {
    "Lookup": 23080,
    "Name": "Nelson Limited",
    "Phone": 3044634313,
    "Address": "Nelson Limited PO Box 298 Thomas WV 26292"
  },
  {
    "Lookup": 23100,
    "Name": "Niner Construction",
    "Phone": 3013874087,
    "Address": "Niner Construction Route 4 Box 4980 Oakland MD 21550"
  },
  {
    "Lookup": 23120,
    "Name": "Roger & Cindy Newman",
    "Phone": 8144426505,
    "Address": "Roger & Cindy Newman 307 Maybury Lane Swanton MD 21561"
  },
  {
    "Lookup": 23125,
    "Name": "Newman & Sons",
    "Phone": 3013344605,
    "Address": "Newman & Sons 7084 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 23165,
    "Name": "Noland Company Vrdc/I",
    "Phone": 7579289000,
    "Address": "Noland Company Vrdc/I 80 29th Street Newport News VA 23607"
  },
  {
    "Lookup": 23170,
    "Name": "Norm Guthrie",
    "Phone": 3013342200,
    "Address": "Norm Guthrie 223 Deerfield Dr. Deer Park MD 21550"
  },
  {
    "Lookup": 23225,
    "Name": "North Glade Inn",
    "Phone": 3013873373,
    "Address": "North Glade Inn 184 North Glade Rd Swanton MD 21561"
  },
  {
    "Lookup": 23300,
    "Name": "Action Towing",
    "Phone": 3016161683,
    "Address": "Action Towing 3773 Maryland Hwy Oakland MD 21550"
  },
  {
    "Lookup": 23301,
    "Name": "Nu-Finish Collision Center",
    "Phone": 3013344727,
    "Address": "Nu-Finish Collision Center 1470 Maryland Hwy Oakland MD 21550"
  },
  {
    "Lookup": 23350,
    "Name": "Nu-Image",
    "Phone": 3015010029,
    "Address": "Nu-Image 320 Dawson Ave. Oakland MD 21550"
  },
  {
    "Lookup": 23400,
    "Name": "Nuway Interiors",
    "Phone": 3013349275,
    "Address": "Nuway Interiors 31 CommeRCe Drive Oakland MD 21550-9605"
  },
  {
    "Lookup": 23600,
    "Name": "Crosco Trucking",
    "Phone": 7248142085,
    "Address": "Crosco Trucking 144 Keefer Rd Oakland MD 21550"
  },
  {
    "Lookup": 23675,
    "Name": "Oakland FFA",
    "Phone": 3046783699,
    "Address": "Oakland FFA 345 Oakland Drive Oakland MD 21550"
  },
  {
    "Lookup": 23700,
    "Name": "Oakland Oil Company",
    "Phone": 3013342678,
    "Address": "Oakland Oil Company PO Box 575 Oakland MD 21550"
  },
  {
    "Lookup": 23725,
    "Name": "Oakland Post Office",
    "Phone": 3013343151,
    "Address": "Oakland Post Office 22 South 2Nd Street Oakland MD 21550"
  },
  {
    "Lookup": 23750,
    "Name": "Oakland V.F.D.",
    "Phone": 3013343535,
    "Address": "Oakland V.F.D. PO Box 43 Oakland MD 21550"
  },
  {
    "Lookup": 23775,
    "Name": "Oakley C. White",
    "Phone": 3016165829,
    "Address": "Oakley C. White 212 N. 10Th St Oakland MD 21550"
  },
  {
    "Lookup": 23800,
    "Name": "Orions Belt",
    "Phone": 3016165120,
    "Address": "Orions Belt 328 Dawson Ave Oakland MD 21550"
  },
  {
    "Lookup": 23850,
    "Name": "Our's Auto Salvage",
    "Phone": 3013348497,
    "Address": "Our's Auto Salvage 3635 Hutton Rd. Oakland MD 21550"
  },
  {
    "Lookup": 23900,
    "Name": "Rick Palmer",
    "Phone": 3013341246,
    "Address": "Rick Palmer 1113 White Pine CiRCle Oakland MD 21550"
  },
  {
    "Lookup": 23910,
    "Name": "Par Matt Lanes",
    "Phone": 3013343040,
    "Address": "Par Matt Lanes 21 Lewis B. Naylor Dr. Oakland MD 21550"
  },
  {
    "Lookup": 23912,
    "Name": "Par Electrical Cont.",
    "Phone": 3015330411,
    "Address": "Par Electrical Cont. P.O. Box 2187 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 23915,
    "Name": "John R. Parsons & Sons",
    "Phone": 3047353352,
    "Address": "John R. Parsons & Sons 465 Parsons Rd Aurora WV 26705"
  },
  {
    "Lookup": 23925,
    "Name": "Parsons Excavating",
    "Phone": 3047353301,
    "Address": "Parsons Excavating 636 Maple Spring Hwy Eglon WV 26716"
  },
  {
    "Lookup": 23930,
    "Name": "Parsons RePair",
    "Phone": 3047353352,
    "Address": "Parsons RePair 465 Parsons Rd Aurora WV 26705"
  },
  {
    "Lookup": 23940,
    "Name": "Woodrow W. PAse Iii",
    "Phone": 3016168375,
    "Address": "Woodrow W. PAse Iii Rr 2 Box 44C Tunnelton WV 26444-9617"
  },
  {
    "Lookup": 24000,
    "Name": "Patterson Boat Co. Inc.",
    "Phone": 3013875000,
    "Address": "Patterson Boat Co. Inc. 106 Round Beach CiRCle Dr Swanton MD 21561"
  },
  {
    "Lookup": 24100,
    "Name": "Patriot Chrysler Dodge Jeep",
    "Phone": 3013347888,
    "Address": "Patriot Chrysler Dodge Jeep 2499 Maryland Hwy Mt Lake Park MD 21550"
  },
  {
    "Lookup": 24150,
    "Name": "Jay K. PAugh",
    "Phone": 3013342210,
    "Address": "Jay K. PAugh 6128 Maryland Highway Oakland MD 21550"
  },
  {
    "Lookup": 24200,
    "Name": "Brandon PAugh",
    "Phone": "",
    "Address": "Brandon PAugh 4148 Pleasant VAlley Rd Oakland MD 21550"
  },
  {
    "Lookup": 24230,
    "Name": "Robert P. Thomas",
    "Phone": 3013344744,
    "Address": "Robert P. Thomas 2797 Broadford Road Oakland MD 21550"
  },
  {
    "Lookup": 24265,
    "Name": "Reuben Peachey Farms",
    "Phone": 3013341350,
    "Address": "Reuben Peachey Farms 1375 Blue RiBBon Rd Oakland MD 21550"
  },
  {
    "Lookup": 24275,
    "Name": "John Peck",
    "Phone": 3013341497,
    "Address": "John Peck 718 East Oak Street Oakland MD 21550"
  },
  {
    "Lookup": 24300,
    "Name": "Pennington Garage",
    "Phone": 3013344938,
    "Address": "Pennington Garage 8700 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 24400,
    "Name": "Wolford Perando",
    "Phone": 3013872404,
    "Address": "Wolford Perando 398 Youghiogheny Path Oakland MD 21550"
  },
  {
    "Lookup": 24450,
    "Name": "Performance Chevrolet",
    "Phone": 3044782831,
    "Address": "Performance Chevrolet 224 Pennsylvania Ave. Parsons WV 26287"
  },
  {
    "Lookup": 24500,
    "Name": "Peters Fuel Corp.",
    "Phone": 3013342936,
    "Address": "Peters Fuel Corp. P.O. Box 119 Oakland MD 21550"
  },
  {
    "Lookup": 24550,
    "Name": "Perana's Customs",
    "Phone": 3016162692,
    "Address": "Perana's Customs 1159 Sand Flat Rd Oakland MD 21550"
  },
  {
    "Lookup": 24600,
    "Name": "Perry's Solid Waste Disposal",
    "Phone": 3013341025,
    "Address": "Perry's Solid Waste Disposal 151 Oakland Drive Oakland MD 21550"
  },
  {
    "Lookup": 24625,
    "Name": "Phillips Precast Concrete Inc.",
    "Phone": "",
    "Address": "Phillips Precast Concrete Inc. Hc 81 Box 53 Tunnelton WV 26444"
  },
  {
    "Lookup": 24630,
    "Name": "Pifer Auto RePair",
    "Phone": 2404421345,
    "Address": "Pifer Auto RePair 652 Hutton Rd Oakland MD 21550"
  },
  {
    "Lookup": 24650,
    "Name": "Pine Hill Tree Farm",
    "Phone": 3013349704,
    "Address": "Pine Hill Tree Farm 71 Myrl Wilt Lane Swanton MD 21561"
  },
  {
    "Lookup": 24670,
    "Name": "Phenix Technologies Inc.",
    "Phone": 3017468118,
    "Address": "Phenix Technologies Inc. 75 Speicher Drive Accident MD 21520"
  },
  {
    "Lookup": 24695,
    "Name": "Pine Hills GreenhoUse",
    "Phone": 3047896329,
    "Address": "Pine Hills GreenhoUse 653 Feather Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 24700,
    "Name": "Pinetum Christmas Trees",
    "Phone": 3013874588,
    "Address": "Pinetum Christmas Trees 1039 Fort Hill Rd. Swanton MD 21561"
  },
  {
    "Lookup": 24725,
    "Name": "Pioneer Conveyor, LLC",
    "Phone": 3044132500,
    "Address": "Pioneer Conveyor, LLC 224 Moyer Rd Bruceton Mills WV 26525"
  },
  {
    "Lookup": 24790,
    "Name": "Pittman's Tree & Landscaping",
    "Phone": 5406363392,
    "Address": "Pittman's Tree & Landscaping P.O. Box 531 Front Royal VA 22630"
  },
  {
    "Lookup": 25050,
    "Name": "Potomac Construction",
    "Phone": 3013343866,
    "Address": "Potomac Construction P.O. Box 526 White Stone VA 22578"
  },
  {
    "Lookup": 25055,
    "Name": "Potomac Excavating",
    "Phone": 2413214647,
    "Address": "Potomac Excavating 157 Allen Marple Dr Oakland MD 21550"
  },
  {
    "Lookup": 25060,
    "Name": "Potomac-North Inc.",
    "Phone": "",
    "Address": "Potomac-North Inc. 1320 Memorial Dr PO Box 97 Oakland MD 21550"
  },
  {
    "Lookup": 25061,
    "Name": "Potomac North Inc",
    "Phone": 3048132650,
    "Address": "Potomac North Inc PO Box 114 Bayard WV 26707"
  },
  {
    "Lookup": 25075,
    "Name": "Powell's Auto Parts",
    "Phone": 3014635671,
    "Address": "Powell's Auto Parts 15815 Lwr Geo Creek Rd Lonaconing MD 21539"
  },
  {
    "Lookup": 25100,
    "Name": "Power Construction & Maintenan",
    "Phone": 8043091046,
    "Address": "Power Construction & Maintenan 107 Ogden Road Altavista VA 24517"
  },
  {
    "Lookup": 25150,
    "Name": "Precision Crane",
    "Phone": 3012454491,
    "Address": "Precision Crane 8027 Rock Lodge Rd. Accident MD 21520"
  },
  {
    "Lookup": 25175,
    "Name": "Preferred Lawn",
    "Phone": 3013347870,
    "Address": "Preferred Lawn PO Box 2356 Oakland MD 21550"
  },
  {
    "Lookup": 25190,
    "Name": "Premium Collision Center, LLC",
    "Phone": 3047891133,
    "Address": "Premium Collision Center, LLC 919 W State Ave Terra Alta WV 26764"
  },
  {
    "Lookup": 25200,
    "Name": "Preston Contractors Inc.",
    "Phone": 3043292129,
    "Address": "Preston Contractors Inc. P.O. Box 606 Kingwood WV 26537"
  },
  {
    "Lookup": 25215,
    "Name": "Preston Parts",
    "Phone": 3043291110,
    "Address": "Preston Parts 308 Kingston Road Kingwood WV 26537"
  },
  {
    "Lookup": 25220,
    "Name": "Pristine Auto Body",
    "Phone": 3013343909,
    "Address": "Pristine Auto Body PO Box 591 Oakland MD 21550"
  },
  {
    "Lookup": 25225,
    "Name": "Mike Pritt",
    "Phone": 3013345824,
    "Address": "Mike Pritt 139 Cherry Creek Lane Oakland MD 21550"
  },
  {
    "Lookup": 25235,
    "Name": "Pro-Clean",
    "Phone": 3016164846,
    "Address": "Pro-Clean P.O Box 602 Mc Henry MD 21541"
  },
  {
    "Lookup": 25240,
    "Name": "Code Green Constr. LLC",
    "Phone": 3013344977,
    "Address": "Code Green Constr. LLC 165 Mayhew In Rd Oakland MD 21550"
  },
  {
    "Lookup": 25300,
    "Name": "Dave Pysell",
    "Phone": "",
    "Address": "Dave Pysell Route 4 Box 386 Deer Park MD 21550"
  },
  {
    "Lookup": 25425,
    "Name": "R.A.M. Trucking, LLC.",
    "Phone": 3013340509,
    "Address": "R.A.M. Trucking, LLC. 1201 Gorman Rd. Oakland MD 21550"
  },
  {
    "Lookup": 25440,
    "Name": "Rd Logging",
    "Phone": 3044411630,
    "Address": "Rd Logging 288 Snowy Creek Rd Oakland MD 21550"
  },
  {
    "Lookup": 25445,
    "Name": "Rd Mckenzie Logging",
    "Phone": 3016978847,
    "Address": "Rd Mckenzie Logging 983 Beall School Rd Frostburg MD 21532"
  },
  {
    "Lookup": 25450,
    "Name": "RJ's",
    "Phone": 3047355256,
    "Address": "RJ's P.O. Box 2 Aurora WV 26705"
  },
  {
    "Lookup": 25500,
    "Name": "Rinker Construction LLC.",
    "Phone": 3013344544,
    "Address": "Rinker Construction LLC. 114 Keefer Rd. Oakland MD 21550"
  },
  {
    "Lookup": 25570,
    "Name": "R & J RePair Center Inc",
    "Phone": 3047353888,
    "Address": "R & J RePair Center Inc 23480 George Washington Hwy Aurora WV 26705"
  },
  {
    "Lookup": 25573,
    "Name": "RC Logging LLC",
    "Phone": 3047353570,
    "Address": "RC Logging LLC 2944 Aurora Pike Aurora WV 26705"
  },
  {
    "Lookup": 25575,
    "Name": "Jones Farm",
    "Phone": 3013342859,
    "Address": "Jones Farm 5243 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 25585,
    "Name": "RJ Tractor RePair",
    "Phone": 3016169952,
    "Address": "RJ Tractor RePair 132 Artenis Harsh Dr Eglon WV 26716"
  },
  {
    "Lookup": 25600,
    "Name": "R & R Trucking",
    "Phone": 3013343111,
    "Address": "R & R Trucking 48 Allen Marple Dr. Oakland MD 21550-9354"
  },
  {
    "Lookup": 25625,
    "Name": "R & W Equipment",
    "Phone": 3047355273,
    "Address": "R & W Equipment P.O. Box 31 Aurora WV 26705"
  },
  {
    "Lookup": 25640,
    "Name": "Ry Angus Farms",
    "Phone": 3013348870,
    "Address": "Ry Angus Farms 617 Durr Rd. Oakland MD 21550"
  },
  {
    "Lookup": 25650,
    "Name": "J & J Body Shop Inc.",
    "Phone": 3047892431,
    "Address": "J & J Body Shop Inc. P.O. Box 83 Terra Alta WV 26764"
  },
  {
    "Lookup": 25750,
    "Name": "R.L.S. Enterprises",
    "Phone": 3046937373,
    "Address": "R.L.S. Enterprises P.O.Box 107 Bayard WV 26707"
  },
  {
    "Lookup": 25755,
    "Name": "RLB Services",
    "Phone": 3042909637,
    "Address": "RLB Services PO Box 163 Terra Alta WV 26764"
  },
  {
    "Lookup": 25760,
    "Name": "R.P.M. Construction",
    "Phone": 3013347860,
    "Address": "R.P.M. Construction 147-A Service Center Rd. Oakland MD 21550"
  },
  {
    "Lookup": 25790,
    "Name": "RWB Innovations Inc",
    "Phone": 2404881053,
    "Address": "RWB Innovations Inc 226 Francis Sanders Dr. Oakland MD 21550"
  },
  {
    "Lookup": 25810,
    "Name": "Rapidways Truck Leasing",
    "Phone": 8147657859,
    "Address": "Rapidways Truck Leasing P.O. Box 707 Clearfield PA 16830"
  },
  {
    "Lookup": 25825,
    "Name": "Randy's Body Shop",
    "Phone": 3013341534,
    "Address": "Randy's Body Shop 2299 Hutton Rd. Oakland MD 21550"
  },
  {
    "Lookup": 25830,
    "Name": "Ratliff Hardwoods LLC",
    "Phone": 3045883738,
    "Address": "Ratliff Hardwoods LLC 1499 Gnegy ChuRCh Rd Oakland MD 21550"
  },
  {
    "Lookup": 26000,
    "Name": "Ted Raynovich Iii",
    "Phone": 3013341629,
    "Address": "Ted Raynovich Iii 112 Round Beach Cir. Dr. Swanton MD 21561"
  },
  {
    "Lookup": 26100,
    "Name": "RBJ Trucking",
    "Phone": 3047356306,
    "Address": "RBJ Trucking 3203 Lantz Ridge Rd Aurora WV 26705"
  },
  {
    "Lookup": 26200,
    "Name": "Reckart Logging Co.",
    "Phone": 3015330047,
    "Address": "Reckart Logging Co. 971 Snowy Creek Rd Oakland MD 21550"
  },
  {
    "Lookup": 26250,
    "Name": "Jimmy Reckart",
    "Phone": 3047896266,
    "Address": "Jimmy Reckart 28562 Veterans Memorial Hwy Terra Alta WV 26764"
  },
  {
    "Lookup": 26260,
    "Name": "Recreational Ind-Wisp",
    "Phone": 3013874911,
    "Address": "Recreational Ind-Wisp 296 Marshill Rd. Mchenry MD 21541"
  },
  {
    "Lookup": 26300,
    "Name": "Red Rock Enterprises LLC",
    "Phone": 3017465515,
    "Address": "Red Rock Enterprises LLC 9659 Friendsville Rd Friendsville MD 21531"
  },
  {
    "Lookup": 26400,
    "Name": "Robert Ridder Excavating",
    "Phone": 3013343939,
    "Address": "Robert Ridder Excavating 430 South 8th Street Oakland MD 21550"
  },
  {
    "Lookup": 26450,
    "Name": "Darwin Robeson",
    "Phone": 3016891721,
    "Address": "Darwin Robeson 2281 Lower New Germany Rd Frostburg MD 21532"
  },
  {
    "Lookup": 26460,
    "Name": "Rocky Gap Resort/Evitts Resorts",
    "Phone": 3017848482,
    "Address": "Rocky Gap Resort/Evitts Resorts 12516 Pleasant VAlley Rd. Flintstone MD 21530"
  },
  {
    "Lookup": 26470,
    "Name": "Rocky Top Maintenace & RePair",
    "Phone": 3016160261,
    "Address": "Rocky Top Maintenace & RePair 763 Pysell Crosscut Rd Oakland MD 21550"
  },
  {
    "Lookup": 26475,
    "Name": "Russell Rodeheaver",
    "Phone": "",
    "Address": "Russell Rodeheaver P.O. Box 453 Oakland MD 21550"
  },
  {
    "Lookup": 26600,
    "Name": "Zane Riggleman",
    "Phone": "",
    "Address": "Zane Riggleman Rt. 2 Box 246C Horseshoe Run WV 26716"
  },
  {
    "Lookup": 26700,
    "Name": "Rigidply Rafters Of MD",
    "Phone": 3013343977,
    "Address": "Rigidply Rafters Of MD P.O. Box 177 Richland PA 17087-0177"
  },
  {
    "Lookup": 26740,
    "Name": "Austin Rodeheaver",
    "Phone": 2403214106,
    "Address": "Austin Rodeheaver 402 North 3Rd Street Oakland MD 21550"
  },
  {
    "Lookup": 26800,
    "Name": "Frazee Excavating",
    "Phone": 3042904477,
    "Address": "Frazee Excavating 1350 Cranesville Loop Rd. Terra Alta WV 26764"
  },
  {
    "Lookup": 26900,
    "Name": "Frazee's Mountain Top Mgt",
    "Phone": 2403211936,
    "Address": "Frazee's Mountain Top Mgt 4976 White Rock Rd Friendsville MD 21531"
  },
  {
    "Lookup": 26910,
    "Name": "Donald Robinson",
    "Phone": 3046937278,
    "Address": "Donald Robinson P.O. Box 102 Bayard WV 26707"
  },
  {
    "Lookup": 26915,
    "Name": "Don Rodeheaver RePair LLC",
    "Phone": 3018953700,
    "Address": "Don Rodeheaver RePair LLC 8736 National Pike P.O Box 22 Grantsville MD 21536"
  },
  {
    "Lookup": 26920,
    "Name": "Rohmac Inc",
    "Phone": 3042592210,
    "Address": "Rohmac Inc 1947 Wilson Corona Rd. Oakland MD 21550"
  },
  {
    "Lookup": 26925,
    "Name": "Roland Murphy Farm",
    "Phone": 3012454170,
    "Address": "Roland Murphy Farm 578 Murphy Lane Swanton MD 21561"
  },
  {
    "Lookup": 26928,
    "Name": "Rola Farms Inc.",
    "Phone": 3013877801,
    "Address": "Rola Farms Inc. 56 Beckman Rd. Swanton MD 21561"
  },
  {
    "Lookup": 26929,
    "Name": "Ron's Garage",
    "Phone": 3013599309,
    "Address": "Ron's Garage P.O. Box 34 Bloomington MD 21523"
  },
  {
    "Lookup": 26950,
    "Name": "Glenn Roth",
    "Phone": 3013341247,
    "Address": "Glenn Roth 400 Yough West Apt 4 Oakland MD 21550"
  },
  {
    "Lookup": 26970,
    "Name": "Rowlesburg Ambulance Service",
    "Phone": 3044542080,
    "Address": "Rowlesburg Ambulance Service P.O. Box 428 Rowlesburg WV 26425"
  },
  {
    "Lookup": 26975,
    "Name": "Rowlesburg Service Center",
    "Phone": 3044549586,
    "Address": "Rowlesburg Service Center P.O. Box 577 Rowlesburg WV 26425"
  },
  {
    "Lookup": 26980,
    "Name": "Rowlesburg Volunteer Fire Depa",
    "Phone": 3044549551,
    "Address": "Rowlesburg Volunteer Fire Depa P.O. Box 364 Rowlesburg WV 26425"
  },
  {
    "Lookup": 26982,
    "Name": "Roy's Auto Body Shop",
    "Phone": 3047896298,
    "Address": "Roy's Auto Body Shop 53 Roy Lane Terra Alta WV 26764"
  },
  {
    "Lookup": 26985,
    "Name": "Roy's Auto Sales",
    "Phone": 3047892100,
    "Address": "Roy's Auto Sales 605 W. State St Terra Alta WV 26764"
  },
  {
    "Lookup": 26990,
    "Name": "Roy's Garage",
    "Phone": 3013877700,
    "Address": "Roy's Garage 2208 Swanton Rd. Swanton MD 21561"
  },
  {
    "Lookup": 27000,
    "Name": "Rt. 24 Sales & Service",
    "Phone": 3047355870,
    "Address": "Rt. 24 Sales & Service Rt. Box 289-2 Horseshoe Run WV 26716"
  },
  {
    "Lookup": 27010,
    "Name": "Roberts Auto RePair",
    "Phone": 3016167710,
    "Address": "Roberts Auto RePair 1941 Garrett Rd Oakland MD 21550"
  },
  {
    "Lookup": 27025,
    "Name": "Robert's Towing",
    "Phone": 3013344673,
    "Address": "Robert's Towing 3983 Bethlehem Oakland MD 21550"
  },
  {
    "Lookup": 27030,
    "Name": "RS Painting LLC",
    "Phone": 3013878545,
    "Address": "RS Painting LLC 1408 Pine Hill Rd Swanton MD 21550"
  },
  {
    "Lookup": 27050,
    "Name": "Rush Excavating",
    "Phone": 3013341399,
    "Address": "Rush Excavating 808 Sandflat Road Oakland MD 21550"
  },
  {
    "Lookup": 27125,
    "Name": "S.C.& L.",
    "Phone": 3013878387,
    "Address": "S.C.& L. 413 Sisler Lane Friendsville MD 21531"
  },
  {
    "Lookup": 27150,
    "Name": "S & P Performance & RePair",
    "Phone": 3013341654,
    "Address": "S & P Performance & RePair 219 Loch Deer Road Oakland MD 21550"
  },
  {
    "Lookup": 27185,
    "Name": "Sams Agway",
    "Phone": 3013343444,
    "Address": "Sams Agway 451 South 8th St Oakland MD 21550"
  },
  {
    "Lookup": 27200,
    "Name": "Sam's Auto RePair",
    "Phone": 3047893111,
    "Address": "Sam's Auto RePair 211 East High Avenue Terra Alta WV 26764"
  },
  {
    "Lookup": 27250,
    "Name": "Alex Sanders",
    "Phone": "",
    "Address": "Alex Sanders 27 Norris Welch Rd APartment B Oakland MD 21550"
  },
  {
    "Lookup": 27275,
    "Name": "Savage River Works",
    "Phone": 3013342335,
    "Address": "Savage River Works 581 Clifton Dr Oakland MD 21550"
  },
  {
    "Lookup": 27285,
    "Name": "Dr. William G. Savage",
    "Phone": 3013343435,
    "Address": "Dr. William G. Savage Ardsley Farms Swanton MD 21561"
  },
  {
    "Lookup": 27300,
    "Name": "Savage Services Corporation",
    "Phone": 3013345324,
    "Address": "Savage Services Corporation 354 Table Rock Rd. Oakland MD 21550"
  },
  {
    "Lookup": 27325,
    "Name": "Ken's Auto RePair",
    "Phone": 2403211331,
    "Address": "Ken's Auto RePair 212 Gap Run Rd Friendsville MD 21531"
  },
  {
    "Lookup": 27340,
    "Name": "Calvin Schrock Farms",
    "Phone": 3013348517,
    "Address": "Calvin Schrock Farms 211 Wes White Road Oakland MD 21550"
  },
  {
    "Lookup": 27350,
    "Name": "Kenny Schrock Auto RePair",
    "Phone": 3013345740,
    "Address": "Kenny Schrock Auto RePair 7372 Gorman Rd. Oakland MD 21550"
  },
  {
    "Lookup": 27400,
    "Name": "Schrock Ag Parts",
    "Phone": 3013349060,
    "Address": "Schrock Ag Parts 247 Wes White Road Oakland MD 21550"
  },
  {
    "Lookup": 27425,
    "Name": "Schrock Trucking",
    "Phone": 3016160447,
    "Address": "Schrock Trucking 1568 Lynndale Rd. Oakland MD 21550"
  },
  {
    "Lookup": 27500,
    "Name": "Ernie Schrock",
    "Phone": 3013349060,
    "Address": "Ernie Schrock 3344 Underwood Rd. Oakland MD 21550"
  },
  {
    "Lookup": 27525,
    "Name": "BoBBy Schmidt",
    "Phone": "",
    "Address": "BoBBy Schmidt 1896 Memorial Drive Oakland Oakland MD 21550"
  },
  {
    "Lookup": 27550,
    "Name": "James E. Schmidt",
    "Phone": 3013876557,
    "Address": "James E. Schmidt 457 Steiding ChuRCh Rd Swanton MD 21561"
  },
  {
    "Lookup": 27715,
    "Name": "Second Chance Farms",
    "Phone": 3013342094,
    "Address": "Second Chance Farms 2833 Wilson Corona Road Oakland MD 21550"
  },
  {
    "Lookup": 27800,
    "Name": "Serious Trucking",
    "Phone": 3046986728,
    "Address": "Serious Trucking 40 Snyder Hollow Aurora WV 26705"
  },
  {
    "Lookup": 27865,
    "Name": "Delbert Shaffer",
    "Phone": 3046985670,
    "Address": "Delbert Shaffer PO Box 247 Rowlesburg WV 26425"
  },
  {
    "Lookup": 27870,
    "Name": "Robert Shaffer",
    "Phone": "",
    "Address": "Robert Shaffer 1952 Jennings Road Grantsville MD 21536"
  },
  {
    "Lookup": 27900,
    "Name": "Shaffer Ford Sales Inc.",
    "Phone": 3013342121,
    "Address": "Shaffer Ford Sales Inc. 12532 Garrett Highway Oakland MD 21550-1115"
  },
  {
    "Lookup": 28100,
    "Name": "Ray E. Shillingburg",
    "Phone": 3013342862,
    "Address": "Ray E. Shillingburg P.O. Box 93 Gormania WV 26720"
  },
  {
    "Lookup": 28200,
    "Name": "Shirer's Tin Shop",
    "Phone": 3013343320,
    "Address": "Shirer's Tin Shop 117 East Oak Street Oakland MD 21550"
  },
  {
    "Lookup": 28375,
    "Name": "Marvin W. Shreve",
    "Phone": 3013345968,
    "Address": "Marvin W. Shreve 60 Steyer Mine Road Oakland MD 21550"
  },
  {
    "Lookup": 28400,
    "Name": "Shreve Backhoe & Dozer Service",
    "Phone": 3013344971,
    "Address": "Shreve Backhoe & Dozer Service 2676 Shady Dale Rd. Oakland MD 21550"
  },
  {
    "Lookup": 28450,
    "Name": "Shreve Farming",
    "Phone": 3047498229,
    "Address": "Shreve Farming 761 Oak Dale Rd Keyser WV 26726"
  },
  {
    "Lookup": 28475,
    "Name": "Michael Slaubaugh",
    "Phone": "",
    "Address": "Michael Slaubaugh 660 Sweitzertown Rd Swanton MD 21561"
  },
  {
    "Lookup": 28500,
    "Name": "Bill Shuttleworth",
    "Phone": 3013342023,
    "Address": "Bill Shuttleworth 115 Tannery Rd. Oakland MD 21550"
  },
  {
    "Lookup": 28510,
    "Name": "Sierra Construction",
    "Phone": 3047356867,
    "Address": "Sierra Construction 880 Maple Spring Hwy. Eglon WV 26716"
  },
  {
    "Lookup": 28550,
    "Name": "Mr. Randy Sigley",
    "Phone": 3046983552,
    "Address": "Mr. Randy Sigley 261 Casteel Road Terra Alta WV 26764"
  },
  {
    "Lookup": 28575,
    "Name": "Silver Cross Trucking",
    "Phone": 3047355259,
    "Address": "Silver Cross Trucking Hc 82 Box 108 Terra Alta WV 26764"
  },
  {
    "Lookup": 28600,
    "Name": "Silver Knob Pallet LLC",
    "Phone": 3013875004,
    "Address": "Silver Knob Pallet LLC 479 O'Brien Rd. Swanton MD 21561"
  },
  {
    "Lookup": 28625,
    "Name": "Simco LLC",
    "Phone": 3046677956,
    "Address": "Simco LLC 1738 Maple Spring Hwy Eglon WV 26716"
  },
  {
    "Lookup": 28630,
    "Name": "Bill Simmons",
    "Phone": 3044549404,
    "Address": "Bill Simmons P.O. Box 222 Carolina WV 26563"
  },
  {
    "Lookup": 28650,
    "Name": "Simon PeaRCe (US), Inc.",
    "Phone": 8026746280,
    "Address": "Simon PeaRCe (US), Inc. 109 Park Road Windsor Vt 05089"
  },
  {
    "Lookup": 28700,
    "Name": "Simpson Auto Body",
    "Phone": 3016161087,
    "Address": "Simpson Auto Body 331 Hotel Rd. Deer Park MD 21550"
  },
  {
    "Lookup": 28800,
    "Name": "Simpson Trucking",
    "Phone": "",
    "Address": "Simpson Trucking 98 Apple Blossom Ln Oakland MD 21550"
  },
  {
    "Lookup": 28825,
    "Name": "Sines Harvesting",
    "Phone": 3016169987,
    "Address": "Sines Harvesting 235 Underwood Road Oakland MD 21550"
  },
  {
    "Lookup": 28850,
    "Name": "Skyline Excavating & Tree Servic",
    "Phone": 3015013055,
    "Address": "Skyline Excavating & Tree Servic 4162 Blooming Rose Rd Friendsville MD 21531"
  },
  {
    "Lookup": 28950,
    "Name": "David K. Sisler",
    "Phone": "",
    "Address": "David K. Sisler 403 Pleasant View Ln Oakland MD 21550"
  },
  {
    "Lookup": 29000,
    "Name": "John Sisler",
    "Phone": 3013345667,
    "Address": "John Sisler 805 Hutton Rd. Oakland MD 21550"
  },
  {
    "Lookup": 29050,
    "Name": "Vince Sisler",
    "Phone": "",
    "Address": "Vince Sisler Rt. 2 Box 4980 Oakland MD 21550"
  },
  {
    "Lookup": 29200,
    "Name": "Sisler Lumber Co.",
    "Phone": 3013342778,
    "Address": "Sisler Lumber Co. P.O. Box 40 New Creek WV 26743"
  },
  {
    "Lookup": 29220,
    "Name": "Sisler Trucking",
    "Phone": "",
    "Address": "Sisler Trucking P.O. Box 9895 Aurora WV 26705"
  },
  {
    "Lookup": 29230,
    "Name": "Shirley Slaubaugh",
    "Phone": 3046937423,
    "Address": "Shirley Slaubaugh P.O. Box 233 Bayard WV 26707"
  },
  {
    "Lookup": 29275,
    "Name": "American Heritage Home Imp.LLC",
    "Phone": 3013878040,
    "Address": "American Heritage Home Imp.LLC 3287 Cranesville Road Oakland MD 21550"
  },
  {
    "Lookup": 29300,
    "Name": "Snow's Mt. Top Service Center",
    "Phone": 3048132079,
    "Address": "Snow's Mt. Top Service Center Rt. 50 Box P0102 Mt Storm WV 26739"
  },
  {
    "Lookup": 29400,
    "Name": "Delmer Snyder",
    "Phone": 3013342516,
    "Address": "Delmer Snyder 114 F Street Mt Lake Park MD 21550"
  },
  {
    "Lookup": 29405,
    "Name": "Mr. Michael A. Snyder",
    "Phone": 3013342396,
    "Address": "Mr. Michael A. Snyder 2389 Pysell Crosscut Road Oakland MD 21550"
  },
  {
    "Lookup": 29415,
    "Name": "Snyder's Cabnets",
    "Phone": 3013342662,
    "Address": "Snyder's Cabnets 6646 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 29420,
    "Name": "Snyder Motors",
    "Phone": 3043292213,
    "Address": "Snyder Motors P.O. Box 268 Kingwood WV 26537"
  },
  {
    "Lookup": 29425,
    "Name": "Sojourn Movers",
    "Phone": 3013346211,
    "Address": "Sojourn Movers 223 Deer Park Hotel Road Oakland MD 21550"
  },
  {
    "Lookup": 29500,
    "Name": "D.E. Bolden",
    "Phone": 3013348582,
    "Address": "D.E. Bolden 120 W. Pennington Street Oakland MD 21550"
  },
  {
    "Lookup": 29550,
    "Name": "Southern Garrett Co. Rescue Sq",
    "Phone": 3013343000,
    "Address": "Southern Garrett Co. Rescue Sq P.O. Box 378 Oakland MD 21550"
  },
  {
    "Lookup": 29600,
    "Name": "Southern High Auto Shop",
    "Phone": 3013349447,
    "Address": "Southern High Auto Shop 345 Oakland Dr. Oakland MD 21550"
  },
  {
    "Lookup": 29700,
    "Name": "Southern States Coop.",
    "Phone": 3013342965,
    "Address": "Southern States Coop. 1867 Maryland Hwy. Mt Lake Park MD 21550"
  },
  {
    "Lookup": 29730,
    "Name": "SPaid Spring Meadow Farm",
    "Phone": 3047355201,
    "Address": "SPaid Spring Meadow Farm 59 Beckman Dr. Eglon WV 26716"
  },
  {
    "Lookup": 29750,
    "Name": "Spring Lick Pallet",
    "Phone": 3013878471,
    "Address": "Spring Lick Pallet 2662 Spring Lick Rd. Swanton MD 21561"
  },
  {
    "Lookup": 29800,
    "Name": "A. A. Stacy & Son",
    "Phone": 3012454027,
    "Address": "A. A. Stacy & Son 1141 Orendorf Road Accident MD 21520"
  },
  {
    "Lookup": 29850,
    "Name": "Standard Laboratories",
    "Phone": 3046937613,
    "Address": "Standard Laboratories 13509 George Washington Hwy Mount Storm WV 26739"
  },
  {
    "Lookup": 29900,
    "Name": "Stans Garage",
    "Phone": 3013341553,
    "Address": "Stans Garage 1251 Bethlehem Rd. Oakland MD 21550"
  },
  {
    "Lookup": 29925,
    "Name": "Stellar Collision Center Inc",
    "Phone": 3013342777,
    "Address": "Stellar Collision Center Inc 4923 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 29965,
    "Name": "Steyer Fuel Inc.",
    "Phone": 3042960906,
    "Address": "Steyer Fuel Inc. P.O. Box 549 Dellslow WV 26531"
  },
  {
    "Lookup": 29975,
    "Name": "Steyer Trucking",
    "Phone": 3013343721,
    "Address": "Steyer Trucking 1165 Steyer Mine Rd. Oakland MD 21550"
  },
  {
    "Lookup": 30000,
    "Name": "Larry Steadman",
    "Phone": "",
    "Address": "Larry Steadman 122 Wayne Harvey Rd. Oakland MD 21550"
  },
  {
    "Lookup": 30100,
    "Name": "BuFFAlo's Mow & Snow",
    "Phone": 3013343301,
    "Address": "BuFFAlo's Mow & Snow 10097 Garrett Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 30150,
    "Name": "Mrs. Sheila Stemple",
    "Phone": 3013341531,
    "Address": "Mrs. Sheila Stemple 93 Shaffer Hill Road Oakland MD 21550"
  },
  {
    "Lookup": 30160,
    "Name": "Intersection",
    "Phone": 3047353035,
    "Address": "Intersection 3377 Maple Spring Hwy Eglon WV 26716"
  },
  {
    "Lookup": 30175,
    "Name": "Stemple Logging",
    "Phone": 3047355402,
    "Address": "Stemple Logging Hc 82 Box 218 Aurora WV 26705"
  },
  {
    "Lookup": 30200,
    "Name": "Byco Enterprises Inc",
    "Phone": 3012464322,
    "Address": "Byco Enterprises Inc 11746 Bittinger Rd Grantsville MD 21536"
  },
  {
    "Lookup": 30300,
    "Name": "Kearney Ridge Farm",
    "Phone": 3013343979,
    "Address": "Kearney Ridge Farm 563 N Lemoyne King Rd. Oakland MD 21550"
  },
  {
    "Lookup": 30400,
    "Name": "Lee Steyer Excavating",
    "Phone": 3013342809,
    "Address": "Lee Steyer Excavating 6381 Gorman Rd. Oakland MD 21550"
  },
  {
    "Lookup": 30450,
    "Name": "Mr. Randall Steyer",
    "Phone": 3013342900,
    "Address": "Mr. Randall Steyer 2727 Gorman Road Oakland MD 21550"
  },
  {
    "Lookup": 30460,
    "Name": "Sticks And Stones",
    "Phone": 3016163820,
    "Address": "Sticks And Stones 2986 Oakland Sang Run Rd Oakland MD 21550"
  },
  {
    "Lookup": 30600,
    "Name": "Stoney Hill Corporation",
    "Phone": 3047355465,
    "Address": "Stoney Hill Corporation 5544 Stemple Ridge Rd Aurora WV 26705"
  },
  {
    "Lookup": 30650,
    "Name": "Suburban Propane Accounts PAy",
    "Phone": 3013342626,
    "Address": "Suburban Propane Accounts PAy PO Box 7447 Attn:Csc2300 Philadelphia PA 19101"
  },
  {
    "Lookup": 30675,
    "Name": "Mr. Robert Streets",
    "Phone": 3044465335,
    "Address": "Mr. Robert Streets Route 1 Elk Garden WV 26717"
  },
  {
    "Lookup": 30690,
    "Name": "Success Floor Covering",
    "Phone": 3013342203,
    "Address": "Success Floor Covering 108E. Liberty Street Oakland MD 21550"
  },
  {
    "Lookup": 30700,
    "Name": "Dean Sullivan",
    "Phone": 3013348792,
    "Address": "Dean Sullivan 222 E Street Mt Lake Park MD 21550"
  },
  {
    "Lookup": 30748,
    "Name": "Sunrise RePair",
    "Phone": 3016161938,
    "Address": "Sunrise RePair 1791 Mansfield Rd Oakland MD 21550"
  },
  {
    "Lookup": 30750,
    "Name": "Sunrise Sanitation",
    "Phone": 3013346212,
    "Address": "Sunrise Sanitation P.O Box 675 Oakland MD 21550"
  },
  {
    "Lookup": 30760,
    "Name": "Sunset Farm",
    "Phone": 3014533383,
    "Address": "Sunset Farm 1261 North Hill Road Kitzmiller MD 21538"
  },
  {
    "Lookup": 30765,
    "Name": "Super Car Wash MD LLC",
    "Phone": 3016166218,
    "Address": "Super Car Wash MD LLC PO Box 675 Oakland MD 21550"
  },
  {
    "Lookup": 30775,
    "Name": "Dewitt's RePair",
    "Phone": 3016168311,
    "Address": "Dewitt's RePair 5726 Cransville Rd Oakland MD 21550"
  },
  {
    "Lookup": 30800,
    "Name": "Super Deal Auto Sales",
    "Phone": 3013343664,
    "Address": "Super Deal Auto Sales Route 1 Box 7926 Oakland MD 21550"
  },
  {
    "Lookup": 30825,
    "Name": "Super Duty Trucking LLC",
    "Phone": 3047353408,
    "Address": "Super Duty Trucking LLC PO Box 55 193 Eglon Rd Eglon WV 26716"
  },
  {
    "Lookup": 30850,
    "Name": "Swanton Groc.,Gas&Liquor",
    "Phone": 3013875701,
    "Address": "Swanton Groc.,Gas&Liquor 3562 Swanton Road Swanton MD 21561"
  },
  {
    "Lookup": 30900,
    "Name": "Jim Sweitzer",
    "Phone": 3046989031,
    "Address": "Jim Sweitzer 2415 Steyer Mine Rd. Oakland MD 21550"
  },
  {
    "Lookup": 31000,
    "Name": "Jerry Swiger",
    "Phone": 3013344818,
    "Address": "Jerry Swiger 614 Deer Park Ave. Mt Lake Park MD 21550"
  },
  {
    "Lookup": 31100,
    "Name": "Mr. Ron Swiger",
    "Phone": 3015013623,
    "Address": "Mr. Ron Swiger 123 Matthew Rd Oakland MD 21550"
  },
  {
    "Lookup": 31200,
    "Name": "Sylvan Manufacturing Co. Inc.",
    "Phone": 3013343683,
    "Address": "Sylvan Manufacturing Co. Inc. 436 South Eighth Street Oakland MD 21550"
  },
  {
    "Lookup": 31250,
    "Name": "Dave Sypolt",
    "Phone": 3047353043,
    "Address": "Dave Sypolt 4068 Seneca Trail Eglon WV 26716"
  },
  {
    "Lookup": 31260,
    "Name": "Sypolt Services",
    "Phone": 3046988333,
    "Address": "Sypolt Services P.O. Box 125 Terra Alta WV 26764"
  },
  {
    "Lookup": 31265,
    "Name": "Tnt Log & Siding Restoration LLC",
    "Phone": 3016161542,
    "Address": "Tnt Log & Siding Restoration LLC 887 Painter School Rd Swanton MD 21561"
  },
  {
    "Lookup": 31270,
    "Name": "T & B RePair",
    "Phone": 3013348588,
    "Address": "T & B RePair 210 Main Street Deer Park MD 21550"
  },
  {
    "Lookup": 31272,
    "Name": "T.C. Trucking & Garage",
    "Phone": 3012684248,
    "Address": "T.C. Trucking & Garage 19118 Legislative Rd Barton MD 21521"
  },
  {
    "Lookup": 31275,
    "Name": "T.C.S. Hardwoods Inc.",
    "Phone": 3018955069,
    "Address": "T.C.S. Hardwoods Inc. River Road Grantsville MD 21536"
  },
  {
    "Lookup": 31285,
    "Name": "T & L Excavating",
    "Phone": 3047355879,
    "Address": "T & L Excavating 524 Gnegy ChuRCh Rd. Eglon WV 26716"
  },
  {
    "Lookup": 31286,
    "Name": "T & P Trucking",
    "Phone": 3047356657,
    "Address": "T & P Trucking 1518 Brookside Rd Aurora WV 26705"
  },
  {
    "Lookup": 31287,
    "Name": "T & S Auto RePair",
    "Phone": 3047353807,
    "Address": "T & S Auto RePair 709 Accident Rd Eglon WV 26716"
  },
  {
    "Lookup": 31289,
    "Name": "T & T Electrical Service LLC",
    "Phone": 3047355879,
    "Address": "T & T Electrical Service LLC 524 Gnegy ChuRCh Rd Eglon WV 26716"
  },
  {
    "Lookup": 31290,
    "Name": "Choice Pre-Owned Auto",
    "Phone": 3017073710,
    "Address": "Choice Pre-Owned Auto 12800 Mcmullen Hwy Cumberland MD 21502"
  },
  {
    "Lookup": 31300,
    "Name": "Lost Land Stone",
    "Phone": 3015010883,
    "Address": "Lost Land Stone 2175 Potomac Camp Rd. Oakland MD 21550"
  },
  {
    "Lookup": 31350,
    "Name": "Derek Tasker's Auto RePair",
    "Phone": 2403215362,
    "Address": "Derek Tasker's Auto RePair 1257 Table Rock Rd Oakland MD 21550"
  },
  {
    "Lookup": 31375,
    "Name": "Tasker Excavating LLC",
    "Phone": 3013872173,
    "Address": "Tasker Excavating LLC 19194 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 31400,
    "Name": "Tasker Trucking",
    "Phone": 3013345920,
    "Address": "Tasker Trucking 78 Congress Avenue Oakland MD 21550"
  },
  {
    "Lookup": 31425,
    "Name": "Tasker Logging",
    "Phone": 3013343206,
    "Address": "Tasker Logging 2099 Steyer Mine Rd Oakland MD 21550"
  },
  {
    "Lookup": 31450,
    "Name": "Target Lumber & Logging",
    "Phone": 3013878244,
    "Address": "Target Lumber & Logging P.O. Box 97 Oakland MD 21550"
  },
  {
    "Lookup": 31500,
    "Name": "Frazee Mountain Top Mgt",
    "Phone": 2403211936,
    "Address": "Frazee Mountain Top Mgt 4976 White Rock Rd Friendsville MD 21531"
  },
  {
    "Lookup": 31515,
    "Name": "Teagarden Small Engine RePair",
    "Phone": "",
    "Address": "Teagarden Small Engine RePair 671 Nestlick Acres Road Oakland MD 21550"
  },
  {
    "Lookup": 31525,
    "Name": "Team One",
    "Phone": 3013349494,
    "Address": "Team One 12899 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 31685,
    "Name": "Terra Alta Community Ambulance",
    "Phone": 3047896566,
    "Address": "Terra Alta Community Ambulance P.O. Box 384 Terra Alta WV 26764"
  },
  {
    "Lookup": 31725,
    "Name": "Terra Alta V.F.D.",
    "Phone": 3047895475,
    "Address": "Terra Alta V.F.D. 1120 East State Ave. Terra Alta WV 26764"
  },
  {
    "Lookup": 31750,
    "Name": "Terra Alta Water Works",
    "Phone": 3047896211,
    "Address": "Terra Alta Water Works 701 A E. State Ave. Terra Alta WV 26764"
  },
  {
    "Lookup": 31790,
    "Name": "Thomas Hardwoods",
    "Phone": 3013517306,
    "Address": "Thomas Hardwoods 2859 Broadford Road Oakland MD 21550"
  },
  {
    "Lookup": 31800,
    "Name": "Thomas' Tires & Accessories",
    "Phone": 3013344547,
    "Address": "Thomas' Tires & Accessories 9276 Garrett Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 31890,
    "Name": "Thomas And Thomas Construction",
    "Phone": "",
    "Address": "Thomas And Thomas Construction P.O. Box 193 Grantsville MD 21536"
  },
  {
    "Lookup": 31897,
    "Name": "Thomas RePair And Collision LLC",
    "Phone": 3016166712,
    "Address": "Thomas RePair And Collision LLC 1273 Table Rock Road Oakland MD 21550"
  },
  {
    "Lookup": 31900,
    "Name": "Larry E. Thomas",
    "Phone": 3013345972,
    "Address": "Larry E. Thomas 3158 Table Rock Rd. Oakland MD 21550"
  },
  {
    "Lookup": 31950,
    "Name": "Tim Thomas",
    "Phone": 3047896302,
    "Address": "Tim Thomas 114 Caldwell Street Terra Alta WV 26764"
  },
  {
    "Lookup": 31960,
    "Name": "Timbrook Automotive 9.0 LLC",
    "Phone": 3013342121,
    "Address": "Timbrook Automotive 9.0 LLC 12532 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 31975,
    "Name": "Tichnell & Son",
    "Phone": 3016165502,
    "Address": "Tichnell & Son 373 Steyer Mine Rd Oakland MD 21550"
  },
  {
    "Lookup": 32100,
    "Name": "Tom Hardesty",
    "Phone": 3015018668,
    "Address": "Tom Hardesty P.O. Box 2011 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 32125,
    "Name": "Thompson Gas",
    "Phone": 3013872400,
    "Address": "Thompson Gas 17863 Garrett Hwy. Oakland MD 21550"
  },
  {
    "Lookup": 32150,
    "Name": "Top Shop",
    "Phone": 3013343251,
    "Address": "Top Shop 222 Nazelrod Rd. Oakland MD 21550"
  },
  {
    "Lookup": 32225,
    "Name": "Town Of Bayard",
    "Phone": 3046937134,
    "Address": "Town Of Bayard P.O Box 243 Bayard WV 26707"
  },
  {
    "Lookup": 32250,
    "Name": "Town Of Deer Park",
    "Phone": 3013344531,
    "Address": "Town Of Deer Park 100 ChuRCh Street Deer Park MD 21550"
  },
  {
    "Lookup": 32275,
    "Name": "Town Of Kitzmiller Mayor & Cou",
    "Phone": 3014533449,
    "Address": "Town Of Kitzmiller Mayor & Cou P.O. Box 607 Kitzmiller MD 21538"
  },
  {
    "Lookup": 32300,
    "Name": "Town Of Loch Lynn",
    "Phone": 3013348339,
    "Address": "Town Of Loch Lynn 211 Bonnie Blvd Mt Lake Park MD 21550"
  },
  {
    "Lookup": 32400,
    "Name": "Town Of Mt. Lake Park",
    "Phone": 3013342250,
    "Address": "Town Of Mt. Lake Park P.O. Box 2182 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 32500,
    "Name": "Town Of Oakland",
    "Phone": 3013342691,
    "Address": "Town Of Oakland 15 South Third St. Oakland MD 21550"
  },
  {
    "Lookup": 32550,
    "Name": "Town Of Rowlesburg",
    "Phone": 3044542441,
    "Address": "Town Of Rowlesburg P.O. Box 458 Rowlesburg WV 26425"
  },
  {
    "Lookup": 32625,
    "Name": "Traxx LLC",
    "Phone": 3013346911,
    "Address": "Traxx LLC 81 Bethlehem Rd Oakland MD 21550"
  },
  {
    "Lookup": 32650,
    "Name": "Tree & Land Service",
    "Phone": 3013344791,
    "Address": "Tree & Land Service 18215 Garrett Hwy Oakland MD 21550"
  },
  {
    "Lookup": 32700,
    "Name": "Triple D Logging",
    "Phone": 3047353026,
    "Address": "Triple D Logging 22180 George Washington Hwy Aurora WV 26705"
  },
  {
    "Lookup": 32750,
    "Name": "Tressler's Garage",
    "Phone": 3013344160,
    "Address": "Tressler's Garage 2701 Old Crellin Rd. Oakland MD 21550"
  },
  {
    "Lookup": 32775,
    "Name": "Tressler's Auto Electric",
    "Phone": 3013349341,
    "Address": "Tressler's Auto Electric 1477 Maryland Hwy Mt Lake Park MD 21550"
  },
  {
    "Lookup": 32780,
    "Name": "Eric TriBBey",
    "Phone": "",
    "Address": "Eric TriBBey P.O. Box 2202 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 32790,
    "Name": "Triple S Construction",
    "Phone": 3013877607,
    "Address": "Triple S Construction 97 Sky VAlley Spur Rd Swanton MD 21561"
  },
  {
    "Lookup": 32791,
    "Name": "Triple S Hardwoods, LLC",
    "Phone": 3016166335,
    "Address": "Triple S Hardwoods, LLC 4704 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 32795,
    "Name": "Triple Green Mill LLC",
    "Phone": 3047498736,
    "Address": "Triple Green Mill LLC 3400 Keplinger Rd Maysville WV 26833"
  },
  {
    "Lookup": 32800,
    "Name": "Trout Run Farm",
    "Phone": 3013343051,
    "Address": "Trout Run Farm 444 Landons Dam Road Oakland MD 21550"
  },
  {
    "Lookup": 32900,
    "Name": "Tri County Hardwoods",
    "Phone": 3043794225,
    "Address": "Tri County Hardwoods Rt. 3 Bruceton Mills WV 26525"
  },
  {
    "Lookup": 33015,
    "Name": "Tri-State Gazebo LLC",
    "Phone": 3013870447,
    "Address": "Tri-State Gazebo LLC 5637 Bittinger Rd Swanton MD 21561"
  },
  {
    "Lookup": 33025,
    "Name": "Tri State Seal Coating Inc.",
    "Phone": 3013875053,
    "Address": "Tri State Seal Coating Inc. 163 Pine Tree Point Rd. Swanton MD 21561"
  },
  {
    "Lookup": 33040,
    "Name": "Trumbull Corporation",
    "Phone": "",
    "Address": "Trumbull Corporation P.O. Box 6774 Pittsburgh PA 15212"
  },
  {
    "Lookup": 33050,
    "Name": "Tub's And Stuff",
    "Phone": 3013343539,
    "Address": "Tub's And Stuff 8 Wallman Road Oakland MD 21550"
  },
  {
    "Lookup": 33060,
    "Name": "Tucker Co. High School",
    "Phone": 3044783111,
    "Address": "Tucker Co. High School Rt. 1 Box 153 Hambletton WV 26269"
  },
  {
    "Lookup": 33065,
    "Name": "Tucker Co Solid Waste Auth.",
    "Phone": 3042594867,
    "Address": "Tucker Co Solid Waste Auth. PO Box 445 407 William Ave Davis WV 26260"
  },
  {
    "Lookup": 33090,
    "Name": "UTS",
    "Phone": 3015330548,
    "Address": "UTS P.O. Box 135 Mt Storm WV 26739"
  },
  {
    "Lookup": 33100,
    "Name": "Underwood Excavating",
    "Phone": 3013349391,
    "Address": "Underwood Excavating P.O. Box 712 Oakland MD 21550"
  },
  {
    "Lookup": 33150,
    "Name": "Underwood Metal Works LLC",
    "Phone": 3016164678,
    "Address": "Underwood Metal Works LLC 47 Morgans Lane Oakland MD 21550"
  },
  {
    "Lookup": 33200,
    "Name": "Legend Auto Center & Used Cars",
    "Phone": 2404466488,
    "Address": "Legend Auto Center & Used Cars 171 MD Line Rd Bruceton Mills WV 26525"
  },
  {
    "Lookup": 33250,
    "Name": "Union Ambulance Service",
    "Phone": 3047356881,
    "Address": "Union Ambulance Service 23979 George Washington Hwy Aurora WV 26705"
  },
  {
    "Lookup": 33275,
    "Name": "Uphold Trucking LLC.",
    "Phone": 7242080063,
    "Address": "Uphold Trucking LLC. P.O. Box 184 Farmington PA 15437"
  },
  {
    "Lookup": 33300,
    "Name": "Deer Park Automotive",
    "Phone": 3013349321,
    "Address": "Deer Park Automotive 424 Edgewood Drive Oakland MD 21550"
  },
  {
    "Lookup": 33350,
    "Name": "Upole Camper Sales",
    "Phone": 3013344693,
    "Address": "Upole Camper Sales P.O. Box3112 Deer Park MD 21550"
  },
  {
    "Lookup": 33370,
    "Name": "US Army Student Training Facil",
    "Phone": "",
    "Address": "US Army Student Training Facil 240 Army Road Kingwood WV 26537-0860"
  },
  {
    "Lookup": 33375,
    "Name": "Ted Uphold",
    "Phone": 3013342927,
    "Address": "Ted Uphold 473 Garrett Rd. Oakland MD 21550"
  },
  {
    "Lookup": 33380,
    "Name": "Brian VAndevender",
    "Phone": 3046977106,
    "Address": "Brian VAndevender P.O. Box 26 Aurora WV 26705"
  },
  {
    "Lookup": 33385,
    "Name": "Verizon Fleet",
    "Phone": 3013349976,
    "Address": "Verizon Fleet Mc: Txadtdmd PO Box 152134 Irving Tx 75015"
  },
  {
    "Lookup": 33450,
    "Name": "Viola Sharpening & RePair",
    "Phone": 3047355481,
    "Address": "Viola Sharpening & RePair 373 Quaking Maples Dr Eglon WV 26716"
  },
  {
    "Lookup": 33500,
    "Name": "Vindex Energy Corporation",
    "Phone": 3042594853,
    "Address": "Vindex Energy Corporation PO Box 78 201 BuFFAlo Coal Rd Mount Storm WV 26739"
  },
  {
    "Lookup": 33525,
    "Name": "Virginia Power Mt.Storm Power",
    "Phone": 3042595272,
    "Address": "Virginia Power Mt.Storm Power Attn: Accounting Mt Storm WV 26739"
  },
  {
    "Lookup": 33530,
    "Name": "Virginia Electric & Power",
    "Phone": 3046937885,
    "Address": "Virginia Electric & Power C/O North Branch Operatio Bayard WV 26707"
  },
  {
    "Lookup": 33550,
    "Name": "Virts Auto Sales",
    "Phone": 3014533533,
    "Address": "Virts Auto Sales Star Route Box 21 Kitzmiller MD 21538"
  },
  {
    "Lookup": 33600,
    "Name": "Larry Wagner Trucking",
    "Phone": 3013876160,
    "Address": "Larry Wagner Trucking 299 Spring Glade Road Oakland MD 21550"
  },
  {
    "Lookup": 33650,
    "Name": "W.R. Casteel Co. Inc.",
    "Phone": 7244373672,
    "Address": "W.R. Casteel Co. Inc. 323 Hopwood Coolspring Rd. Hopwood PA 15445"
  },
  {
    "Lookup": 33700,
    "Name": "W.W. Auto RePair",
    "Phone": 3013344927,
    "Address": "W.W. Auto RePair 5362 Hutton Road Oakland MD 21550"
  },
  {
    "Lookup": 33750,
    "Name": "W & W Logging",
    "Phone": 3046937576,
    "Address": "W & W Logging P.O. Box 144 Mt Storm WV 26739"
  },
  {
    "Lookup": 33850,
    "Name": "Wayne's Water & Wells",
    "Phone": 3013877181,
    "Address": "Wayne's Water & Wells 19139 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 33855,
    "Name": "WeBB Distributors LLC",
    "Phone": 3013346121,
    "Address": "WeBB Distributors LLC 991 Old Crellin Rd Oakland MD 21550"
  },
  {
    "Lookup": 33860,
    "Name": "Welding Rod",
    "Phone": 3013879111,
    "Address": "Welding Rod 3456 Sandflat Road Oakland MD 21550"
  },
  {
    "Lookup": 33865,
    "Name": "Walter Weeks",
    "Phone": 3013349740,
    "Address": "Walter Weeks 1947 SmoUse Road Oakland MD 21550"
  },
  {
    "Lookup": 33870,
    "Name": "Frankie Weese",
    "Phone": "",
    "Address": "Frankie Weese Hc 30 Box 156 Maysville WV 26833"
  },
  {
    "Lookup": 34000,
    "Name": "Cecil W. Welch Jr.",
    "Phone": 3013876071,
    "Address": "Cecil W. Welch Jr. 3547 Oakland Sang Run Rd. Oakland MD 21550"
  },
  {
    "Lookup": 34200,
    "Name": "Wells Auger Mining",
    "Phone": 3047896837,
    "Address": "Wells Auger Mining 948 Burnside Camp Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 34250,
    "Name": "James L. Wells",
    "Phone": "",
    "Address": "James L. Wells 777 Burnside Camp Rd. Terra Alta WV 26764"
  },
  {
    "Lookup": 34300,
    "Name": "Mark Wells",
    "Phone": "",
    "Address": "Mark Wells 1093 Burnside Camp Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 34400,
    "Name": "Whistle Pig Farm",
    "Phone": 2403217304,
    "Address": "Whistle Pig Farm 499 Snyder Rd Oakland MD 21550"
  },
  {
    "Lookup": 34410,
    "Name": "Western Maryland 4-H Center",
    "Phone": 3013346960,
    "Address": "Western Maryland 4-H Center 1916 Maryland Highway Mt Lake Park MD 21550"
  },
  {
    "Lookup": 34450,
    "Name": "Western Maryland Septic Servic",
    "Phone": 3016163234,
    "Address": "Western Maryland Septic Servic 2970 Fingerboard Rd. Oakland MD 21550"
  },
  {
    "Lookup": 34460,
    "Name": "Western Maryland Tin Shop",
    "Phone": 3013340670,
    "Address": "Western Maryland Tin Shop 17 First Avenue Loch Lynn MD 21550"
  },
  {
    "Lookup": 34462,
    "Name": "Western Maryland Towing",
    "Phone": 3016162929,
    "Address": "Western Maryland Towing 412 West Liberty St Oakland MD 21550"
  },
  {
    "Lookup": 34465,
    "Name": "Western MD. Truck Parts",
    "Phone": 3013872990,
    "Address": "Western MD. Truck Parts 5204 Bittinger Road Swanton MD 21561"
  },
  {
    "Lookup": 34468,
    "Name": "Western Trails LLC",
    "Phone": 3013876155,
    "Address": "Western Trails LLC 4009 Mayhew Inn Rd Oakland MD 21550"
  },
  {
    "Lookup": 34475,
    "Name": "Westmar Builders, Inc.",
    "Phone": 3013870088,
    "Address": "Westmar Builders, Inc. 6201 Sang Run Rd. Mchenry MD 21541"
  },
  {
    "Lookup": 34490,
    "Name": "A & A Truck Service",
    "Phone": 3013341025,
    "Address": "A & A Truck Service 12 Deer Park Hotel Rd Oakland MD 21550"
  },
  {
    "Lookup": 34495,
    "Name": "West VA Dpt. Trans Highway",
    "Phone": "",
    "Address": "West VA Dpt. Trans Highway Clarksburg WV 26302"
  },
  {
    "Lookup": 34500,
    "Name": "Whitacre Auto Sales",
    "Phone": 3013349537,
    "Address": "Whitacre Auto Sales 4429 Maryland Hgy. Oakland MD 21550"
  },
  {
    "Lookup": 34520,
    "Name": "George White",
    "Phone": "",
    "Address": "George White 934 Old Crellin Road Oakland MD 21550"
  },
  {
    "Lookup": 34525,
    "Name": "White ChuRCh Auto",
    "Phone": 3013349038,
    "Address": "White ChuRCh Auto 1240 White ChuRCh Oakland MD 21550"
  },
  {
    "Lookup": 34550,
    "Name": "White Construction",
    "Phone": 7658328526,
    "Address": "White Construction PO Box 249 Clinton In 47842"
  },
  {
    "Lookup": 34575,
    "Name": "White Rock Auto Parts",
    "Phone": 3017465045,
    "Address": "White Rock Auto Parts Rt. 1 Box 251C Friendsville MD 21531"
  },
  {
    "Lookup": 34600,
    "Name": "White's RePair Service",
    "Phone": 3013341395,
    "Address": "White's RePair Service 517 Tower Street Oakland MD 21550"
  },
  {
    "Lookup": 34601,
    "Name": "White Trucking",
    "Phone": 3013344875,
    "Address": "White Trucking 83 Bethleham Rd. Oakland MD 21550"
  },
  {
    "Lookup": 34603,
    "Name": "Rex Wiles",
    "Phone": 3047892170,
    "Address": "Rex Wiles 2935 Rag Tavern Rd. Terra Alta WV 26764"
  },
  {
    "Lookup": 34610,
    "Name": "Roy Wiles Trucking",
    "Phone": 3047892835,
    "Address": "Roy Wiles Trucking 335 Oak Grove Cemetery Rd Terra Alta WV 26764"
  },
  {
    "Lookup": 34615,
    "Name": "Leonard Wilhelm Jr Logging",
    "Phone": "",
    "Address": "Leonard Wilhelm Jr Logging 723 West Blocher Rd. Lonaconing MD 21539"
  },
  {
    "Lookup": 34620,
    "Name": "Ew Hauling",
    "Phone": 3013349221,
    "Address": "Ew Hauling 1006 Broadford Rd. Oakland MD 21550"
  },
  {
    "Lookup": 34625,
    "Name": "Mr. Richard A. Wilt",
    "Phone": 3013341166,
    "Address": "Mr. Richard A. Wilt 445 Wayne Harvey Rd Oakland MD 21550"
  },
  {
    "Lookup": 34630,
    "Name": "Earl Wilt",
    "Phone": 3013348322,
    "Address": "Earl Wilt 338 Gorman St. Oakland MD 21550"
  },
  {
    "Lookup": 34650,
    "Name": "Windfield Golf Course",
    "Phone": 2405223691,
    "Address": "Windfield Golf Course 214 Kamp Side Rd Lonaconing MD 21539"
  },
  {
    "Lookup": 34670,
    "Name": "Richard K. Winters",
    "Phone": 3047356560,
    "Address": "Richard K. Winters 64 Maple Spring Hwy Eglon WV 26716"
  },
  {
    "Lookup": 34673,
    "Name": "Winters General Contractor",
    "Phone": 3013341567,
    "Address": "Winters General Contractor 116 N 8th St Oakland MD 21550"
  },
  {
    "Lookup": 34675,
    "Name": "Winters Painting",
    "Phone": 3013349731,
    "Address": "Winters Painting 171 Fingerboard Road Oakland MD 21550"
  },
  {
    "Lookup": 34680,
    "Name": "Mr. Michael L. White",
    "Phone": 3013876648,
    "Address": "Mr. Michael L. White 837 Spring Glade Rd. Oakland MD 21550"
  },
  {
    "Lookup": 34700,
    "Name": "Wisp Resort",
    "Phone": 3013875581,
    "Address": "Wisp Resort 290 Marsh Hill Rd. Mchenry MD 21541"
  },
  {
    "Lookup": 34750,
    "Name": "Wkhj",
    "Phone": 3013344272,
    "Address": "Wkhj P.O. Box 2337 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 34800,
    "Name": "Ted Wolf Contracting",
    "Phone": 3016166213,
    "Address": "Ted Wolf Contracting P.O.Box 2325 Mt Lake Park MD 21550"
  },
  {
    "Lookup": 34925,
    "Name": "Harlin L. Wolfe",
    "Phone": "",
    "Address": "Harlin L. Wolfe 125 Accident Rd Eglon WV 26716"
  },
  {
    "Lookup": 34970,
    "Name": "Wolfman Trucking",
    "Phone": 3015016001,
    "Address": "Wolfman Trucking 194 Maple Del Lane Oakland MD 21550"
  },
  {
    "Lookup": 34975,
    "Name": "Wolford Trucking",
    "Phone": 3044549711,
    "Address": "Wolford Trucking 18718 George Washington Hwy Rowlesburg WV 26425"
  },
  {
    "Lookup": 35000,
    "Name": "Wood Products Inc.",
    "Phone": 3013349451,
    "Address": "Wood Products Inc. 442 S. 8th Street Oakland MD 21550"
  },
  {
    "Lookup": 35025,
    "Name": "W.P.O. Inc.",
    "Phone": 8142893197,
    "Address": "W.P.O. Inc. 145 Meadow Somerset PA 15501"
  },
  {
    "Lookup": 35050,
    "Name": "Y.H.O.A.",
    "Phone": 3013341416,
    "Address": "Y.H.O.A. 36 Youghiogeny Blvd. Oakland MD 21550"
  },
  {
    "Lookup": 35100,
    "Name": "Marlin Lawson",
    "Phone": 3017465480,
    "Address": "Marlin Lawson 3149 Old Morgantown Rd. Friendsville MD 21531"
  },
  {
    "Lookup": 35300,
    "Name": "New England Truss & Joist",
    "Phone": 3018954220,
    "Address": "New England Truss & Joist 81 Bethlehem Rd. Oakland MD 21550"
  },
  {
    "Lookup": 35500,
    "Name": "219 Motors",
    "Phone": 3013340500,
    "Address": "219 Motors Box 494 Oakland MD 21550"
  },
  {
    "Lookup": 35525,
    "Name": "135 Liberty",
    "Phone": 3013342936,
    "Address": "135 Liberty P.O. Box 119 Oakland MD 21550"
  },
  {
    "Lookup": 35540,
    "Name": "135 Enterprises",
    "Phone": 3016160362,
    "Address": "135 Enterprises 712 Sunshine Dr. Mt Lake Park MD 21550"
  },
  {
    "Lookup": 35550,
    "Name": "Dick's Electric",
    "Phone": 3013879585,
    "Address": "Dick's Electric 18154 Garrett Highway Oakland MD 21550"
  },
  {
    "Lookup": 37000,
    "Name": "Dung Hill Farms",
    "Phone": "",
    "Address": "Dung Hill Farms 2885 Fingerboard Rd Oakland MD 21550"
  },
  {
    "Lookup": 54700,
    "Name": "Busters Stump & Tree Removal",
    "Phone": 3013349784,
    "Address": "Busters Stump & Tree Removal 8005 George Washington Hwy Oakland MD 21550"
  },
  {
    "Lookup": 999999,
    "Name": "Cash Account",
    "Phone": "",
    "Address": "Cash Account Mt Lake Park MD 21550"
  },
  {
    "Lookup": 1,
    "Name": "Southern Auto Supply",
    "Phone": 3013341200,
    "Address": "Southern Auto Supply P.0. Box 2335 Route 135 Mt Lake Park MD 21550"
  }
] ;
 export default customers 