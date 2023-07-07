/**
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import LogUtils from '../common/utils/LogUtils';
import UserAuthExtensionAbility from '@ohos.app.ability.UserAuthExtensionAbility';

const TAG = 'UserAuthAbility';

export default class UserAuthAbility extends UserAuthExtensionAbility {
  onCreate() {
    LogUtils.i(TAG, `UserAuthExtensionAbility onCreate context: ` + JSON.stringify(this.context))
    globalThis.context = this.context;
  }

  onForeground() {
    LogUtils.i(TAG, `UserAuthExtensionAbility onForeground`)
  }

  onBackground() {
    LogUtils.i(TAG, `UserAuthExtensionAbility onBackground`)
  }

  onDestroy() {
    LogUtils.i(TAG, `UserAuthExtensionAbility onDestroy`)
  }

  onSessionCreate(want, session) {
    LogUtils.i(TAG, `UserAuthExtensionAbility onSessionCreate, want: ${JSON.stringify(want)}`)
    let storage: LocalStorage = new LocalStorage({
      'session': session
    });
    globalThis.wantParams = want?.parameters?.wantParams;
    globalThis.session = session;
    session.loadContent('pages/Index', storage);
  }

  onSessionDestroy(session) {
    LogUtils.i(TAG, `UserAuthExtensionAbility onSessionDestroy`)
  }
}