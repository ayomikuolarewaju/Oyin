import OpenAI from "openai";
import { SECRET } from "$env/static/private";
import 'dotenv/config'

const openai = new OpenAI({
    apiKey: 'process.env.SECRET ',
});


const messages = [];


export const isArtPromptAPI = async (prompt) =>{
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ${openai}',
          },

          // body: JSON.parse(
          //   JSON.stringify({
          //     "model": "gpt-3.5-turbo",
          //     "messages": [
          //       {
          //         'role': 'user',
          //         'content':
          //             'Does this message want to generate an AI picture, image, art or anything similar? $prompt . Simply answer with a yes or no.',
          //       }
          //     ],
          //   }),
          // )
      });
      const data = await res.json()
      console.log(data);
      if (res.statusCode == 200) {
         content =
            json(res.body)['choices'][0]['message']['content'];
        content = content.trim();
         console.log(content)
        switch (content) {
          case 'Yes':
          case 'yes':
          case 'Yes.':
          case 'yes.':
            const resd = await dallEAPI(prompt);
            return resd;
          default:
            const resc = await chatGPTAPI(prompt);
            return resc;
        }
      }
      return 'An internal error occurred';
    } catch (e) {
      console.log(e)
    }
  }

   const chatGPTAPI=async( prompt) => {
    messages.add({
      'role': 'user',
      'content': prompt,
    });
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openai}`,
          },
          body: jsonEncode({
            "model": "gpt-3.5-turbo",
            "messages": messages,
          }),
      });

      if (res.statusCode == 200) {
        content =
            jsonDecode(res.body)['choices'][0]['message']['content'];
        content = content.trim();

        messages.add({
          'role': 'assistant',
          'content': content,
        });
        return content;
      }
      return 'An internal error occurred';
    } catch (e) {
      console.log(e)
    }
  }

  const dallEAPI= async(String)=>{
    messages.add({
      'role': 'user',
      'content': prompt,
    });
    try {
      const res = await fetch('https://api.openai.com/v1/images/generations',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openai}`,
          },
          body: jsonEncode({
            'prompt': prompt,
            'n': 1,
          }),
      })

      if (res.statusCode == 200) {
        const imageUrl = jsonDecode(res.body)['data'][0]['url'];
        imageUrl = imageUrl.trim();

        messages.add({
          'role': 'assistant',
          'content': imageUrl,
        });
        return imageUrl;
      }
      return 'An internal error occurred';
    } catch (e) {
      console.log(e);
    }
  }

  