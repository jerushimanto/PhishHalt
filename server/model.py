#Fast API imports
from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost:3000",  # Update with your frontend's URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # You can restrict HTTP methods if needed
    allow_headers=["*"],  # You can restrict headers if needed
)


#necessary imports
import numpy as np
import pandas as pd
import tensorflow as tf
from pandas import read_csv
import pandas as pd
import torch
from urllib.parse import *
import tldextract
import re
from transformers import BertTokenizer
import torch

phishhalt=tf.saved_model.load(r"D:\Downloads\SIH\UI\server\Final_phishhalt")

@app.post("/checkurl")
def validate(url):
    d=[]

    def doml(s):
        e = tldextract.extract(s)
        return len(e.domain)

    def pathl(s):
        parsed_url = urlparse(s)
        path_component = parsed_url.path
        return len(path_component)

    def spec(s):
        special = re.findall(r'[^a-zA-Z0-9]',s)
        return len(special)

    def ippres(s):
        parsed_url = urlparse(url)
        hostname = parsed_url.hostname

        if hostname:
            # Regular expression to match an IPv4 address
            ip_regex = r"\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b"

            # Check if the hostname contains an IP address
            if re.search(ip_regex, hostname):
                return 1
        return 0
    def embed1(url):
        return tokenizer.encode_plus(url, add_special_tokens=True, max_length=128, truncation=True, padding='max_length', return_tensors='pt')
    d.append(len(url))
    d.append(doml(url))
    d.append(url.count('.'))
    d.append(pathl(url))
    d.append(url.count('?'))
    d.append(spec(url))
    d.append(ippres(url))
    d.append(url.count('//'))

    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

    res=embed1(url)
    inp=res["input_ids"]
    mask=res["attention_mask"]
    feature=torch.tensor(d)
    input_feature=torch.cat((inp[0],feature),dim=0)
    e = torch.ones(len(d)).int()
    input_mask= torch.cat((mask[0], e),dim=0)
    input_val=tf.convert_to_tensor(torch.cat((input_feature,input_mask),dim=0))
    x=tf.convert_to_tensor([input_val])
    y=phishhalt(x)
    print(f"Phishing possibility {int(y[0][1]*100)}%")
    return int(y[0][1]*100)