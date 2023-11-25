class Solution:
    def myMap(self,magazine:str)->dict:
        mymap={}
        count=None
        sortmagazine=''.join(sorted(magazine))
        for i in range(len(magazine)):
            if sortmagazine[i] not in mymap:
                count=1
                mymap[sortmagazine[i]]=count
            else:
                count+=1
                mymap[sortmagazine[i]]=count
        return mymap
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        mymagazine=self.myMap(magazine)
        myransomnote=self.myMap(ransomNote)
        for i in myransomnote:
            if i not in mymagazine:
                return False
            else:
                if(myransomnote[i]>mymagazine[i]):
                    return False
        return True