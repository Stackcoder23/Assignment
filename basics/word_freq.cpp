#include <bits/stdc++.h>
using namespace std;

void freq(string str){
    map<string, int> words;
    string word = "";
    for(int i=0; i < str.size(); i++){
        if(str[i] == ' '){
            if(words.find(word) == words.end()){
                words.insert(make_pair(word, 1));
                word = "";
            }
            else{
                words[word]++;
                word = "";
            }
        }
        else
            word += str[i];
    }
    if(words.find(word) == words.end())
        words.insert(make_pair(word,1));
    else
        words[word]++;
    
    for(auto& it : words){
        cout << it.first << " - "
             << it.second
             << endl;
    }
}

int main(){
    string str = "count the frequency of each word in the word frequency sentence";
    freq(str);
    return 0;
}