
function setup() {

    createCanvas(570, 800).parent('p5')
    noLoop()
}

function draw() {

    background(125)
    strokeWeight(1)


//start
noStroke()
fill(255)
beginShape()
vertex(570,68)
vertex(549,65)
vertex(424,101)
vertex(354,99)
vertex(358,108)
vertex(337,111)
vertex(319,121)
vertex(319,129)
vertex(570,114)
endShape()

fill(0)
beginShape()
vertex(300,550)
vertex(282,300)
vertex(273,269)
vertex(313,151)
vertex(312,130)
vertex(357,107)
vertex(357,103)
vertex(394,106)
vertex(368,116)
vertex(352,135)
vertex(320,400)
endShape(CLOSE)

fill(45)
beginShape()
vertex(367,116)
vertex(400,114)
vertex(423,131)
vertex(433,415)
vertex(497,450)
vertex(520,435)
vertex(533,401)
vertex(534,250)
vertex(570,213)
vertex(570,100)
vertex(474,100)
vertex(425,105)
vertex(390,105)
endShape(CLOSE)

fill(210)
beginShape()
vertex(284,298)
vertex(275,269)
vertex(269,269)
vertex(253,293)
vertex(235,307)
vertex(220,309)
vertex(214,304)
vertex(188,309)
vertex(183,312)
vertex(174,336)
vertex(164,338)
vertex(143,397)
vertex(205,688)
vertex(219,694)
vertex(232,749)
vertex(283,780)
vertex(298,783)
vertex(327,774)
vertex(357,747)
vertex(365,703)
vertex(302,547)
endShape(CLOSE)

fill(0)
beginShape()
vertex(247,371)
vertex(252,363)
  vertex(255,400)
    vertex(263,448)
  vertex(250,400)
endShape(CLOSE)

fill(0)
beginShape()
vertex(220,439)
vertex(220,513)
vertex(215,494)
vertex(215,462)
endShape(CLOSE)

fill(0)
beginShape()
vertex(202,561)
vertex(197,565)
vertex(194,590)
vertex(198,591)
vertex(201,565)
endShape(CLOSE)

fill(0)
beginShape()
vertex(262,585)
vertex(260,571)
vertex(265,543)
vertex(267,559)
vertex(264,583)
endShape(CLOSE)

fill(0)
beginShape()
vertex(164,338)
vertex(173,336)
vertex(175,329)
vertex(177,349)
vertex(168,400)
endShape(CLOSE)

fill(150)
beginShape()
vertex(300,550)
vertex(477,512)
vertex(498,449)
vertex(435,414)
vertex(425,130)
vertex(403,113)
vertex(370,116)
vertex(352,133)
vertex(333,300)
vertex(304,361)
vertex(300,429)
endShape(CLOSE)

noFill()
noStroke()
curve(200, 100, 65, 140, 0, 100, 100, 200)
curve(-50,30,65,140,125,320,0,10)
curve(0,0,125,320,205,690,40,0)
line(205,690,220,695)
line(220,695, 233,750)
curve(200,500,360,700,233,750,-200,200)

noStroke()
fill(150)
beginShape()
vertex(204,679)
vertex(225,674)
vertex(242,690)
vertex(223,686)
vertex(228,700)
vertex(238,701)
vertex(257,704)
vertex(235,706)
vertex(260,716)
vertex(234,718)
vertex(270,727)
vertex(247,726)
vertex(248,746)
vertex(255,763)
vertex(230,750)
endShape()

noStroke()
fill(0)
beginShape()
vertex(0,120)
vertex(0,800)
vertex(330,800)
vertex(330,775)
vertex(300,784)
vertex(283,781)
vertex(232,751)
vertex(220,694)
vertex(207,690)
vertex(191,600)
vertex(167,500)
vertex(125,319)
vertex(107,251)
vertex(89,198)
vertex(70,150)
vertex(40,141)
endShape(CLOSE)


fill(255)
noStroke()
beginShape()
vertex(0,100)
vertex(0,120)
vertex(40,141)
vertex(70,149)
vertex(65,139)
endShape(CLOSE)

fill(50)
beginShape()
vertex(346,676)
vertex(360,700)
vertex(293,656)
vertex(248,614)
vertex(379,648)
vertex(473,648)
endShape()

fill(50)
beginShape()
vertex(0,130)
vertex(0,188)
vertex(43,174)
vertex(48,150)
endShape(CLOSE)

fill(50)
beginShape()
vertex(473,648)
vertex(344,676)
vertex(359,705)
vertex(352,744)
vertex(328,774)
vertex(328,800)
vertex(435,800)
endShape(CLOSE)
stroke(0)
curve(1000,100,427,800,473,648,-200,500)

stroke(30)
fill(30)
beginShape()
vertex(570,800)
vertex(570,210)
vertex(533,245)
vertex(534,325)
vertex(533,400)
vertex(520,434)
vertex(500,449)
vertex(474,500)
vertex(380,518)
vertex(332,535)
vertex(280,557)
vertex(278,576)
vertex(240,598)
vertex(248,614)
vertex(379,648)
vertex(474,648)
vertex(495,666)
vertex(498,698)
vertex(475,749)
vertex(435,800)
endShape(CLOSE)

fill(255)
beginShape()
vertex(545,678)
vertex(550,631)
vertex(535,640)
vertex(537,649)
vertex(542,649)
endShape(CLOSE)


//moon
noStroke()
fill(255)
ellipse(220, 45, 35, 40)
}


// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
