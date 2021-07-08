/**
 * 图片段信息
 */
export interface ImageSegments {
    /**
      * 该字段用于返回视频片段的截帧时间，单位为秒。对于点播文件，该参数代表对应截取图片相对于视频的偏移时间，如0（代表不偏移），5（视频开始后5秒），10（视频开始后10秒）；对于直播文件，该参数则返回对应图片的Unix时间戳，如：1594650717。
      */
    OffsetTime: string;
    /**
      * 该字段用于返回视频片段的具体截帧审核结果，详细内容敬请参考ImageResult数据结构的描述。
      */
    Result: ImageResult;
}
/**
 * 图片输出结果的子结果
 */
export interface ImageResultResult {
    /**
      * 该字段用于返回检测结果所对应的恶意场景。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**AppLogo**：广告台标，**Custom**：自定义违规，以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scene: string;
    /**
      * 该参数用于标识审核内容是否命中恶意标签，取值：0（**未命中**）和1（**命中**）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HitFlag: number;
    /**
      * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该字段用于返回恶意标签下对应的子标签的检测结果，如：*Porn-SexBehavior*等子标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubLabel: string;
    /**
      * 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 -性行为 99*，则表明该文本非常有可能属于色情性行为内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 该字段用于返回审核图片在敏感场景下命中的特定对象名称列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Names: Array<string>;
    /**
      * 该字段用于返回图片OCR文本识别的检测结果，识别**上限在5000字节内**。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 该字段用于返回图像审核子结果的其他详细信息，如文本位置、自定义库等。详细返回内容敬请参考ImageResultsResultDetail数据结构的描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Details: Array<ImageResultsResultDetail>;
}
/**
 *  数据存储信息
 */
export interface StorageInfo {
    /**
      * 该字段表示文件访问类型，取值为**URL**（资源链接）和**COS** (腾讯云对象存储)；该字段应当与传入的访问类型相对应，可用于强校验并方便系统快速识别访问地址；若不传入此参数，则默认值为URL，此时系统将自动判定访问地址类型。
      */
    Type?: string;
    /**
      * 该字段表示文件访问的链接地址，格式为标准URL格式。<br> 备注：当Type为URL时此字段不为空，该参数与BucketInfo参数须传入其中之一
      */
    Url?: string;
    /**
      * 该字段表示文件访问的腾讯云存储桶信息。<br> 备注：当Type为COS时此字段不为空，该参数与Url参数须传入其中之一。
      */
    BucketInfo?: BucketInfo;
}
/**
 * 文件桶信息
参考腾讯云存储相关说明 https://cloud.tencent.com/document/product/436/44352
 */
export interface BucketInfo {
    /**
      * 该字段用于标识腾讯云对象存储的存储桶名称,关于文件桶的详细信息敬请参考 [腾讯云存储相关说明](https://cloud.tencent.com/document/product/436/44352)。
      */
    Bucket: string;
    /**
      * 该字段用于标识腾讯云对象存储的托管机房的分布地区，对象存储 COS 的数据存放在这些地域的存储桶中。
      */
    Region: string;
    /**
      * 该字段用于标识腾讯云对象存储的对象Key,对象z作为基本单元被存放在存储桶中；用户可以通过腾讯云控制台、API、SDK 等多种方式管理对象。有关对象的详细描述敬请参阅相应 [产品文档](https://cloud.tencent.com/document/product/436/13324)。
      */
    Object: string;
}
/**
 * CreateVideoModerationTask返回参数结构体
 */
export interface CreateVideoModerationTaskResponse {
    /**
      * 任务创建结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results?: Array<TaskResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 创建任务时的返回结果
 */
export interface TaskResult {
    /**
      * 该字段用于返回创建视频审核任务时在TaskInput结构内传入的DataId，用于标识具体审核任务。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataId: string;
    /**
      * 该字段用于返回视频审核任务所生成的任务ID，用于标识具体审核任务，方便后续查询和管理。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 该字段用于返回任务创建的状态，如返回OK则代表任务创建成功，其他返回值可参考公共错误码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: string;
    /**
      * **仅在Code的返回值为错误码时生效**，用于返回错误的详情内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
}
/**
 * CancelTask请求参数结构体
 */
export interface CancelTaskRequest {
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
    /**
      * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 审核时传入的数据Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataId: string;
    /**
      * 业务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    BizType: string;
    /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 状态，可选值：
FINISH 已完成
PENDING 等待中
RUNNING 进行中
ERROR 出错
CANCELLED 已取消
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 审核建议
可选：
Pass 通过
Reveiw 建议复审
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 审核结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Labels: Array<TaskLabel>;
    /**
      * 媒体解码信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MediaInfo: MediaInfo;
    /**
      * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InputInfo: InputInfo;
    /**
      * 创建时间，格式为 ISO 8601
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedAt: string;
    /**
      * 更新时间，格式为 ISO 8601
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedAt: string;
    /**
      * 视频中截帧审核的结果。
数据有效期为24小时，如需要储存更长时间请在已配置的COS储存桶中设置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageSegments: Array<ImageSegments>;
    /**
      * 视频中音频审核的结果。
数据有效期为24小时，如需要储存更长时间请在已配置的COS储存桶中设置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AudioSegments: Array<AudioSegments>;
    /**
      * 如果返回的状态为ERROR，该字段会标记错误类型。
可选值：：
DECODE_ERROR: 解码失败。（输入资源中可能包含无法解码的视频）
URL_ERROR：下载地址验证失败。
TIMEOUT_ERROR：处理超时。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorType: string;
    /**
      * 审核任务错误日志。当Error不为空时，会展示该字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorDescription: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
    /**
      * 每页展示多少条。（默认展示10条）
      */
    Limit?: number;
    /**
      * 过滤参数
      */
    Filter?: TaskFilter;
    /**
      * 翻页token，在向前或向后翻页时需要
      */
    PageToken?: string;
    /**
      * 开始时间。默认是最近3天。
      */
    StartTime?: string;
    /**
      * 结束时间。默认为空
      */
    EndTime?: string;
}
/**
 * 音视频任务结构
 */
export interface TaskInput {
    /**
      * 选填参数，该字段表示您为待检测对象分配的数据ID，传入后可方便您对文件进行标识和管理。<br>取值：由英文字母（大小写均可）、数字及四个特殊符号（_，-，@，#）组成，**长度不超过64个字符**。
      */
    DataId?: string;
    /**
      * 选填参数，该字段表示审核任务所对应的任务名称，方便后续查询和管理审核任务。
      */
    Name?: string;
    /**
      * 必填参数，该字段表示审核文件的访问参数，用于获取审核媒体文件，该参数内包括访问类型和访问地址。
      */
    Input?: StorageInfo;
}
/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
    /**
      * 任务ID，创建任务后返回的TaskId字段
      */
    TaskId: string;
    /**
      * 是否展示所有分片，默认只展示命中规则的分片
      */
    ShowAllSegments?: boolean;
}
/**
 * 任务输出标签
 */
export interface TaskLabel {
    /**
      * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该字段用于返回当前标签（Label）下的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容；*色情 0*，则表明该文本不属于色情内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
}
/**
 * 具体场景下的图片识别结果
 */
export interface ImageResultsResultDetail {
    /**
      * 该字段用于返回调用视频审核接口时传入的TaskInput参数中的任务名称，方便任务的识别与管理。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 该字段用于返回图片OCR文本识别的检测结果，识别**上限在5000字节内**。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 该字段用于返回图像审核子结果的详细位置信息，如坐标、大小、旋转角度等。详细返回内容敬请参考ImageResultsResultDetailLocation数据结构的描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Location: ImageResultsResultDetailLocation;
    /**
      * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的ID，以方便自定义库管理和配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibId: string;
    /**
      * 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的名称,以方便自定义库管理和配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibName: string;
    /**
      * 该字段用于返回检测文本命中的关键词信息，用于标注文本违规的具体原因（如：*加我微信*）。该参数可能会有多个返回值，代表命中的多个关键词；如返回值为空且Score不为空，则代表识别结果所对应的恶意标签（Label）是来自于语义模型判断的返回值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keywords: Array<string>;
    /**
      * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 该字段用于返回恶意标签下对应的子标签的检测结果，如：*Porn-SexBehavior*等子标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubLabelCode: string;
}
/**
 * 输入信息详情
 */
export interface InputInfo {
    /**
      * 该字段表示文件访问类型，取值为**URL**（资源链接）和**COS** (腾讯云对象存储)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 该字段表示文件访问的链接地址，格式为标准URL格式。<br> 备注：当Type为URL时此字段不为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 该字段表示文件访问的腾讯云存储桶信息。<br> 备注：当Type为COS时此字段不为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BucketInfo: string;
}
/**
 * CreateVideoModerationTask请求参数结构体
 */
export interface CreateVideoModerationTaskRequest {
    /**
      * 任务类型：可选VIDEO（点播视频），LIVE_VIDEO（直播视频）
      */
    Type: string;
    /**
      * 输入的任务信息，最多可以同时创建10个任务
      */
    Tasks: Array<TaskInput>;
    /**
      * 业务类型, 定义 模版策略，输出存储配置。默认为default，客户可以在视频审核控制台创建自己的 BizType
      */
    BizType?: string;
    /**
      * （可选）回调签名key，具体可以查看回调签名示例
      */
    Seed?: string;
    /**
      * 接收审核信息回调地址，如果设置，则审核过程中产生的违规音频片段和画面截帧发送此接口
      */
    CallbackUrl?: string;
    /**
      * 审核排队优先级。当您有多个视频审核任务排队时，可以根据这个参数控制排队优先级。用于处理插队等逻辑。默认该参数为0
      */
    Priority?: number;
}
/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
    /**
      * 任务总量，为 int 字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: string;
    /**
      * 当前页数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: Array<TaskData>;
    /**
      * 翻页Token，当已经到最后一页时，该字段为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    PageToken?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 音频小语种检测结果
 */
export interface AudioResultDetailLanguageResult {
    /**
      * 该字段用于返回语种检测结果所对应的语种标签，目前支持：**Arabic**（阿拉伯语）、**English**（英语）、**Mandarin**（普通话）、**Tibetan**（藏语）、**Uyghur**（维语）、**Other**（其他上面5类之外）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该参数用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表音频越有可能属于当前返回的语种标签；如：*Uyghur 99*，则表明该音频非常有可能属于维语内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 该参数用于返回对应语种标签的片段在音频文件内的开始时间，单位为毫秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: number;
    /**
      * 该参数用于返回对应语种标签的片段在音频文件内的结束时间，单位为毫秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: number;
    /**
      * *内测中，敬请期待*
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubLabelCode: string;
}
/**
 * 任务筛选器
 */
export interface TaskFilter {
    /**
      * 该字段用于传入任务对应的业务类型供筛选器进行筛选。Biztype为策略的具体的编号，用于接口调度，在内容安全控制台中可配置。不同Biztype关联不同的业务场景与审核策略，调用前请确认正确的Biztype。Biztype仅为**数字、字母与下划线的组合**，长度为3-32个字符。<br>备注：在不传入该参数时筛选器默认不筛选业务类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BizType?: Array<string>;
    /**
      * 该字段用于传入视频审核对应的任务类型供筛选器进行筛选，取值为：**VIDEO**（点播视频审核），**AUDIO**（点播音频审核）， **LIVE_VIDEO**（直播视频审核）, **LIVE_AUDIO**（直播音频审核）。<br>备注：在不传入该参数时筛选器默认不筛选任务类型。
      */
    Type?: string;
    /**
      * 该字段用于传入视频审核对应的建议操作供筛选器进行筛选，取值为：**Block**：建议屏蔽，**Review**：建议人工复审，**Pass**：建议通过。<br>备注：在不传入该参数时筛选器默认不筛选建议操作。
      */
    Suggestion?: string;
    /**
      * 该字段用于传入审核任务的任务状态供筛选器进行筛选，取值为：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。<br>备注：在不传入该参数时筛选器默认不筛选任务状态。
      */
    TaskStatus?: string;
}
/**
 * CancelTask返回参数结构体
 */
export interface CancelTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 音频ASR文本审核结果
 */
export interface AudioResultDetailTextResult {
    /**
      * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该字段用于返回ASR识别出的文本内容命中的关键词信息，用于标注内容违规的具体原因（如：加我微信）。该参数可能会有多个返回值，代表命中的多个关键词；若返回值为空，Score不为空，则代表识别结果所对应的恶意标签（Label）来自于语义模型判断的返回值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keywords: Array<string>;
    /**
      * 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的ID，以方便自定义库管理和配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibId: string;
    /**
      * 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的名称,以方便自定义库管理和配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibName: string;
    /**
      * 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 该字段用于返回自定义关键词对应的词库类型，取值为**1**（黑白库）和**2**（自定义关键词库），若未配置自定义关键词库,则默认值为1（黑白库匹配）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibType: number;
}
/**
 * 音频审核输出参数
 */
export interface AudioResult {
    /**
      * 该字段用于返回审核内容是否命中审核模型；取值：0（**未命中**）、1（**命中**）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HitFlag: number;
    /**
      * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 该字段用于返回音频文件经ASR识别后的文本信息。最长可识别**5小时**的音频文件，若超出时长限制，接口将会报错。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 该字段用于返回音频片段存储的链接地址，该地址有效期为1天。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 该字段用于返回音频文件的时长，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duration: string;
    /**
      * 该字段用于返回输入参数中的额外附加信息（Extra），如未配置则默认返回值为空。<br>备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Extra: string;
    /**
      * 该字段用于返回音频文件经ASR识别后产生的文本的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TextResults: Array<AudioResultDetailTextResult>;
    /**
      * 该字段用于返回音频文件呻吟检测的详细审核结果。具体结果内容请参见AudioResultDetailMoanResult数据结构的细节描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MoanResults: Array<AudioResultDetailMoanResult>;
    /**
      * 该字段用于返回音频小语种检测的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LanguageResults: Array<AudioResultDetailLanguageResult>;
}
/**
 * 音频呻吟审核结果
 */
export interface AudioResultDetailMoanResult {
    /**
      * 该字段用于返回检测结果需要检测的内容类型，此处固定为**Moan**（呻吟）以调用呻吟检测功能。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该字段用于返回呻吟检测的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表音频越有可能属于呻吟内容。
      */
    Score: number;
    /**
      * 该字段用于返回对应呻吟标签的片段在音频文件内的开始时间，单位为毫秒。
      */
    StartTime: number;
    /**
      * 该字段用于返回对应呻吟标签的片段在音频文件内的结束时间，单位为毫秒。
      */
    EndTime: number;
    /**
      * *内测中，敬请期待*
      */
    SubLabelCode: string;
}
/**
 * 任务数据
 */
export interface TaskData {
    /**
      * 该字段用于返回视频审核任务数据所对应的数据ID，方便后续查询和管理审核任务。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataId: string;
    /**
      * 该字段用于返回视频审核任务所生成的任务ID，用于标识具体审核任务，方便后续查询和管理。
      */
    TaskId: string;
    /**
      * 该字段用于返回所查询内容的任务状态。
<br>取值：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。
      */
    Status: string;
    /**
      * 该字段用于返回视频审核任务所对应的任务名称，方便后续查询和管理审核任务。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 该字段用于返回调用视频审核接口时传入的BizType参数，方便数据的辨别和管理。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BizType: string;
    /**
      * 该字段用于返回调用音频审核接口时输入的音频审核类型，取值为：**VIDEO**（点播视频）和**LIVE_VIDEO**（直播视频），默认值为VIDEO。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
      */
    Labels: Array<TaskLabel>;
    /**
      * 该字段用于返回输入媒体文件的详细信息，包括编码格式、分片时长等信息。详细内容敬请参考MediaInfo数据结构的描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MediaInfo: MediaInfo;
    /**
      * 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。
      */
    CreatedAt: string;
    /**
      * 该字段用于返回被查询任务最后更新时间，格式采用 ISO 8601标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedAt: string;
}
/**
 * 媒体类型
 */
export interface MediaInfo {
    /**
      * 该字段用于返回对传入的视频流进行分片的片段时长，单位为秒。**默认值为5秒**，支持用户自定义配置。<br>备注：仅在审核文件为流媒体时生效；此字段返回0则代表未取到有效值。
      */
    Duration: number;
}
/**
 * 用于返回音频片段的审核结果
 */
export interface AudioSegments {
    /**
      * 该字段用于返回音频片段的开始时间，单位为秒。对于点播文件，该参数代表对应音频相对于完整音轨的偏移时间，如0（代表不偏移），5（音轨开始后5秒），10（音轨开始后10秒）；对于直播文件，该参数则返回对应音频片段开始时的Unix时间戳，如：1594650717。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OffsetTime: string;
    /**
      * 该字段用于返回音频片段的具体审核结果，详细内容敬请参考AudioResult数据结构的描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: AudioResult;
}
/**
 * 图片详情位置信息
 */
export interface ImageResultsResultDetailLocation {
    /**
      * 该参数用于标识OCR检测框左上角位置的**横坐标**（x）所在的像素位置，结合剩余参数可唯一确定检测框的大小和位置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    X: number;
    /**
      * 该参数用于标识OCR检测框左上角位置的**纵坐标**（y）所在的像素位置，结合剩余参数可唯一确定检测框的大小和位置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Y: number;
    /**
      * 该参数用于标识OCR检测框的宽度（**由左上角出发在x轴向右延伸的长度**）。结合剩余参数可唯一确定检测框的大小和位置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Width: number;
    /**
      * 该参数用于标识OCR检测框的高度（**由左上角出发在y轴向下延伸的长度**）。结合剩余参数可唯一确定检测框的大小和位置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Height: number;
    /**
      * 该参数用于标识OCR检测框的旋转角度，该参数结合X和Y两个坐标参数可唯一确定检测框的具体位置；取值：0-360（**角度制**），方向为**逆时针旋**转。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rotate: number;
}
/**
 * Result结果详情
 */
export interface ImageResult {
    /**
      * 该参数用于标识审核内容是否命中恶意标签，取值：0（**未命中**）和1（**命中**）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HitFlag: number;
    /**
      * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 -性行为 99*，则表明该文本非常有可能属于色情性行为内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 该字段用于返回图像审核结果的子结果，详细内容敬请参考ImageResultResult数据结构的描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results: Array<ImageResultResult>;
    /**
      * 该字段用于返回审核结果的访问链接（URL），图片支持PNG、JPG、JPEG、BMP、GIF、WEBP格式。<br>备注：数据**默认有效期为12小时**。如您需要更长时间的保存，请在数据储存的COS桶中配置对应的储存时长。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 该字段用于返回输入参数中的额外附加信息（Extra），如未配置则默认返回值为空。<br>备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Extra: string;
}
