export default function getText() {
  const texts = [
    `As long as you keep going, you'll keep getting better. And as you get better, you gain more confidence. That alone is success.`,
    `Every night before bed, I drop down to the floor and do 20 sit-ups, 5 push-ups and stretching. No matter what the day has been like, I drop and give myself 20 every single night.`,
    "Your personal life, your professional life, and your creative life are all intertwined. I went through a few very difficult years where I felt like a failure. But it was actually really important for me to go through that. Struggle, for me, is the most inspirational thing in the world at the end of the day - as long as you treat it that way.",
    `I think one of the reasons I've had success in hip-hop is that I can bring out vulnerability in people who are generally seen as tough guys. To me, when a hip-hop musician always plays tough, I find it annoying because I know they're not really like that - there's something deeper and vulnerable. There has to be, because they're human beings.`
  ];

  return texts[Math.floor(Math.random() * texts.length)];
}
