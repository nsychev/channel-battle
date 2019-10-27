#!/usr/bin/env python3.7
# -*- coding: utf-8 -*-

import json
import time

from telethon import TelegramClient, sync

from config import *


def get_participants(client):
    return {
        channel: client.get_participants(channel, limit=0).total
        for channel in CHANNELS
    }


if __name__ == "__main__":
    client = TelegramClient('channel', API_ID, API_HASH)
    client.start()

    while True:
        with open(OUTPUT_FILE, "w") as output:
            stats = get_participants(client)
            print(json.dumps(stats), file=output)

        time.sleep(POLL_INTERVAL)

