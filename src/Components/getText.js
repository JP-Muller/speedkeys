export default function getText() {
  const texts = [
    `As long as you keep going, you'll keep getting better. And as you get better, you gain more confidence. That alone is success.`,
    `Every night before bed, I drop down to the floor and do 20 sit-ups, 5 push-ups and stretching. No matter what the day has been like, I drop and give myself 20 every single night.`,
    "Your personal life, your professional life, and your creative life are all intertwined. I went through a few very difficult years where I felt like a failure. But it was actually really important for me to go through that. Struggle, for me, is the most inspirational thing in the world at the end of the day - as long as you treat it that way.",
    `I think one of the reasons I've had success in hip-hop is that I can bring out vulnerability in people who are generally seen as tough guys. To me, when a hip-hop musician always plays tough, I find it annoying because I know they're not really like that - there's something deeper and vulnerable. There has to be, because they're human beings.`,
    `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
    `In three words I can sum up everything I've learned about life: it goes on.`,
    `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`,
    `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`,
    `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.`,
    `Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.`,
    `Insanity is doing the same thing, over and over again, but expecting different results.`,
    `Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.`,
    `I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.`
  ];

  return texts[Math.floor(Math.random() * texts.length)];
}
